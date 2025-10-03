// ===================================
// Products Data
// ===================================
const products = [
    {
        id: 1,
        name: "Blazer Elegante",
        category: "mujer",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=80",
        badge: "Nuevo"
    },
    {
        id: 2,
        name: "Vestido Clásico",
        category: "mujer",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
        badge: ""
    },
    {
        id: 3,
        name: "Camisa Premium",
        category: "hombre",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
        badge: ""
    },
    {
        id: 4,
        name: "Traje Ejecutivo",
        category: "hombre",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Bolso de Cuero",
        category: "accesorios",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
        badge: ""
    },
    {
        id: 6,
        name: "Abrigo de Lana",
        category: "mujer",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
        badge: "Nuevo"
    },
    {
        id: 7,
        name: "Zapatos Oxford",
        category: "hombre",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80",
        badge: ""
    },
    {
        id: 8,
        name: "Reloj Clásico",
        category: "accesorios",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
        badge: "Exclusivo"
    },
    {
        id: 9,
        name: "Falda Plisada",
        category: "mujer",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
        badge: ""
    },
    {
        id: 10,
        name: "Chaqueta de Cuero",
        category: "hombre",
        price: 329.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
        badge: "Popular"
    },
    {
        id: 11,
        name: "Gafas de Sol",
        category: "accesorios",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
        badge: ""
    },
    {
        id: 12,
        name: "Blusa de Seda",
        category: "mujer",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1564257577-d18b2b93d8c7?w=600&q=80",
        badge: "Nuevo"
    }
];

// ===================================
// Shopping Cart
// ===================================
let cart = [];

// ===================================
// DOM Elements
// ===================================
const productsContainer = document.getElementById('products-container');
const filterButtons = document.querySelectorAll('.btn-filter');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Load products
    displayProducts('all');
    
    // Setup filter buttons
    setupFilters();
    
    // Setup forms
    setupForms();
    
    // Setup navbar scroll effect
    setupNavbar();
    
    // Load cart from localStorage
    loadCart();
    
    // Smooth scroll for anchor links
    setupSmoothScroll();
});

// ===================================
// Display Products
// ===================================
function displayProducts(filter) {
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    productsContainer.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6';
    
    col.innerHTML = `
        <div class="product-card">
            <div class="product-image-container">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-overlay">
                    <button class="btn btn-outline-light" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${getCategoryName(product.category)}</p>
                <h4 class="product-name">${product.name}</h4>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
    
    return col;
}

function getCategoryName(category) {
    const categories = {
        'mujer': 'Mujer',
        'hombre': 'Hombre',
        'accesorios': 'Accesorios'
    };
    return categories[category] || category;
}

// ===================================
// Filter Products
// ===================================
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value and display products
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
}

// ===================================
// Shopping Cart Functions
// ===================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    saveCart();
    
    // Show success message
    showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-bag fa-3x mb-3" style="color: #d4c5b9;"></i>
                <p>Tu carrito está vacío</p>
                <a href="#coleccion" class="btn btn-custom" data-bs-dismiss="modal">Ir a Comprar</a>
            </div>
        `;
        cartTotal.textContent = '$0.00';
    } else {
        let itemsHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            itemsHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        });
        
        cartItems.innerHTML = itemsHTML;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

function saveCart() {
    localStorage.setItem('lumeor_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('lumeor_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// ===================================
// Forms
// ===================================
function setupForms() {
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('¡Gracias por contactarnos! Te responderemos pronto.');
            this.reset();
        });
    }
    
    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Inicio de sesión exitoso');
            bootstrap.Modal.getInstance(document.getElementById('cuentaModal')).hide();
            this.reset();
        });
    }
    
    // Register Form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('¡Registro exitoso! Bienvenido a Luméor');
            bootstrap.Modal.getInstance(document.getElementById('cuentaModal')).hide();
            this.reset();
        });
    }
    
    // Newsletter Form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('¡Gracias por suscribirte!');
            this.reset();
        });
    });
    
    // Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Tu carrito está vacío', 'warning');
                return;
            }
            showNotification('Procesando tu pedido...');
            setTimeout(() => {
                cart = [];
                updateCart();
                saveCart();
                showNotification('¡Pedido realizado con éxito!');
                bootstrap.Modal.getInstance(document.getElementById('carritoModal')).hide();
            }, 1500);
        });
    }
}

// ===================================
// Navbar Scroll Effect
// ===================================
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================================
// Smooth Scroll
// ===================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or triggers a modal
            if (href === '#' || this.hasAttribute('data-bs-toggle')) {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            }
        });
    });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification {
        border-radius: 0;
        border: none;
    }
`;
document.head.appendChild(style);

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.product-card, .category-card, .feature-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});
