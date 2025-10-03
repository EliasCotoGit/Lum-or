// ===================================
// DATOS DE PRODUCTOS
// Array con 6 productos (más fácil de estudiar)
// ===================================
const products = [
    {
        id: 1,
        name: "Blazer Elegante",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=80"
    },
    {
        id: 2,
        name: "Vestido Clásico",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80"
    },
    {
        id: 3,
        name: "Camisa Premium",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"
    },
    {
        id: 4,
        name: "Abrigo de Lana",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80"
    },
    {
        id: 5,
        name: "Bolso de Cuero",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
    },
    {
        id: 6,
        name: "Zapatos Oxford",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80"
    }
];

// ===================================
// CARRITO DE COMPRAS
// Array que guarda los productos agregados
// ===================================
let cart = [];

// ===================================
// ELEMENTOS DEL DOM
// Referencias a elementos HTML
// ===================================
const productsContainer = document.getElementById('products-container');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// ===================================
// INICIALIZACIÓN
// Se ejecuta cuando la página carga
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página cargada correctamente');
    
    // Mostrar productos
    displayProducts();
    
    // Configurar formulario
    setupContactForm();
    
    // Configurar botón de checkout
    setupCheckout();
    
    // Cargar carrito guardado
    loadCart();
    
    // Configurar smooth scroll
    setupSmoothScroll();
});

// ===================================
// FUNCIÓN: MOSTRAR PRODUCTOS
// Crea las cards de productos en el HTML
// ===================================
function displayProducts() {
    console.log('📦 Mostrando productos...');
    
    // Limpiar contenedor
    productsContainer.innerHTML = '';
    
    // Crear una card por cada producto
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// ===================================
// FUNCIÓN: CREAR CARD DE PRODUCTO
// Genera el HTML de cada producto
// ===================================
function createProductCard(product) {
    // Crear elemento columna (Bootstrap)
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12 fade-in';
    
    // HTML de la card
    col.innerHTML = `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-overlay">
                    <button class="btn btn-outline-light" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> Agregar
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
    
    return col;
}

// ===================================
// FUNCIÓN: AGREGAR AL CARRITO
// Añade un producto al carrito
// ===================================
function addToCart(productId) {
    console.log('🛒 Agregando producto ID:', productId);
    
    // Buscar el producto por ID
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('❌ Producto no encontrado');
        return;
    }
    
    // Verificar si ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Si existe, aumentar cantidad
        existingItem.quantity += 1;
        console.log('➕ Cantidad aumentada');
    } else {
        // Si no existe, agregarlo
        cart.push({
            ...product,
            quantity: 1
        });
        console.log('✅ Producto agregado');
    }
    
    // Actualizar la interfaz
    updateCart();
    
    // Guardar en localStorage
    saveCart();
    
    // Mostrar notificación
    showNotification('Producto agregado al carrito');
}

// ===================================
// FUNCIÓN: ELIMINAR DEL CARRITO
// Quita un producto del carrito
// ===================================
function removeFromCart(productId) {
    console.log('🗑️ Eliminando producto ID:', productId);
    
    // Filtrar el carrito (quitar el producto)
    cart = cart.filter(item => item.id !== productId);
    
    // Actualizar interfaz
    updateCart();
    
    // Guardar cambios
    saveCart();
}

// ===================================
// FUNCIÓN: ACTUALIZAR CARRITO
// Actualiza el contador y el contenido del modal
// ===================================
function updateCart() {
    console.log('🔄 Actualizando carrito...');
    
    // Calcular total de items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Si el carrito está vacío
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-shopping-bag fa-3x mb-3" style="color: #d4c5b9;"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }
    
    // Generar HTML de items
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

// ===================================
// FUNCIÓN: GUARDAR CARRITO
// Guarda el carrito en localStorage
// ===================================
function saveCart() {
    localStorage.setItem('lumeor_cart', JSON.stringify(cart));
    console.log('💾 Carrito guardado');
}

// ===================================
// FUNCIÓN: CARGAR CARRITO
// Recupera el carrito de localStorage
// ===================================
function loadCart() {
    const savedCart = localStorage.getItem('lumeor_cart');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
        console.log('📂 Carrito cargado:', cart.length, 'items');
    }
}

// ===================================
// FUNCIÓN: CONFIGURAR FORMULARIO
// Maneja el envío del formulario de contacto
// ===================================
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar que recargue la página
        
        console.log('📧 Formulario enviado');
        showNotification('¡Mensaje enviado! Te contactaremos pronto.');
        
        // Limpiar formulario
        this.reset();
    });
}

// ===================================
// FUNCIÓN: CONFIGURAR CHECKOUT
// Maneja el botón de finalizar compra
// ===================================
function setupCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Tu carrito está vacío', 'warning');
            return;
        }
        
        console.log('💳 Procesando compra...');
        showNotification('¡Compra realizada con éxito!');
        
        // Vaciar carrito
        cart = [];
        updateCart();
        saveCart();
        
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('carritoModal'));
        modal.hide();
    });
}

// ===================================
// FUNCIÓN: SMOOTH SCROLL
// Navegación suave entre secciones
// ===================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar si es solo "#" o abre un modal
            if (href === '#' || this.hasAttribute('data-bs-toggle')) {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = 76;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// FUNCIÓN: MOSTRAR NOTIFICACIÓN
// Muestra un mensaje temporal
// ===================================
function showNotification(message, type = 'success') {
    console.log('🔔 Notificación:', message);
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===================================
// ESTILOS DE ANIMACIÓN
// CSS para las notificaciones
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// CONSOLA DE AYUDA
// Mensaje en la consola del navegador
// ===================================
console.log(`
%c🛍️ Luméor - Versión Simple 
%c
📚 Esta versión está diseñada para aprender
🔍 Abre el código y estudia cada función
💡 Usa console.log() para ver qué pasa

Funciones principales:
- displayProducts() → Muestra los productos
- addToCart(id) → Agrega al carrito
- updateCart() → Actualiza la interfaz
- saveCart() → Guarda en localStorage

¡Feliz aprendizaje! 🚀
`, 
'color: #d4c5b9; font-size: 16px; font-weight: bold;',
'color: #666; font-size: 12px;'
);
