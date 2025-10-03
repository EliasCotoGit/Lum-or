# 📚 Guía de Estudio - Luméor Simplificado

## 🎯 Objetivo

Esta versión simplificada te permite **aprender paso a paso** cómo funciona una tienda web moderna sin abrumarte con código complejo.

---

## 📁 Archivos Simplificados

```
Lum-or/
├── index-simple.html          ← Página principal (150 líneas)
├── css/
│   └── styles-simple.css      ← Estilos (400 líneas, bien comentadas)
└── js/
    └── main-simple.js         ← JavaScript (350 líneas, muy comentadas)
```

---

## 🚀 Cómo Usar Esta Versión

### Opción 1: Abrir directamente
```
Doble clic en: index-simple.html
```

### Opción 2: Con Docker
Edita `docker-compose.yml` y cambia:
```yaml
volumes:
  - ./index-simple.html:/usr/share/nginx/html/index.html:ro
  - ./css:/usr/share/nginx/html/css:ro
  - ./js:/usr/share/nginx/html/js:ro
```

---

## 📖 Plan de Estudio Sugerido

### **Día 1: HTML - Estructura** 📄

#### Conceptos a estudiar:
1. **Estructura básica HTML5**
   - `<!DOCTYPE html>`
   - `<head>` vs `<body>`
   - Meta tags

2. **Navegación**
   - Navbar de Bootstrap
   - Menú hamburguesa
   - Enlaces internos (`#home`, `#coleccion`)

3. **Secciones**
   - Hero section
   - Productos
   - Contacto
   - Footer

#### Ejercicio práctico:
```html
<!-- Intenta agregar una nueva sección -->
<section id="nueva-seccion" class="py-5">
    <div class="container">
        <h2>Mi Nueva Sección</h2>
        <p>Contenido aquí</p>
    </div>
</section>
```

---

### **Día 2: CSS - Estilos** 🎨

#### Conceptos a estudiar:
1. **Variables CSS**
   ```css
   :root {
       --blanco: #FFFFFF;
       --beige: #d4c5b9;
   }
   ```

2. **Selectores**
   - Clases: `.hero-section`
   - IDs: `#home`
   - Elementos: `body`, `h1`

3. **Flexbox**
   ```css
   display: flex;
   justify-content: center;
   align-items: center;
   ```

4. **Responsive Design**
   ```css
   @media (max-width: 768px) {
       /* Estilos para móvil */
   }
   ```

#### Ejercicio práctico:
```css
/* Cambia el color beige a otro */
:root {
    --beige: #c9a88a; /* Prueba este */
}

/* Cambia el tamaño del título */
.hero-title {
    font-size: 4rem; /* Era 3.5rem */
}
```

---

### **Día 3: JavaScript - Lógica Básica** 💻

#### Conceptos a estudiar:
1. **Variables y Arrays**
   ```javascript
   const products = [...]; // Array de productos
   let cart = [];          // Carrito vacío
   ```

2. **Funciones**
   ```javascript
   function displayProducts() {
       // Código aquí
   }
   ```

3. **DOM Manipulation**
   ```javascript
   document.getElementById('cart-count');
   element.innerHTML = '<p>Hola</p>';
   ```

4. **Event Listeners**
   ```javascript
   button.addEventListener('click', function() {
       // Acción al hacer clic
   });
   ```

#### Ejercicio práctico:
```javascript
// Agrega un nuevo producto
const products = [
    // ... productos existentes
    {
        id: 7,
        name: "Tu Producto",
        price: 99.99,
        image: "URL_DE_IMAGEN"
    }
];
```

---

### **Día 4: Carrito de Compras** 🛒

#### Flujo del carrito:
```
1. Usuario hace clic en "Agregar"
   ↓
2. addToCart(id) se ejecuta
   ↓
3. Busca el producto en el array
   ↓
4. Lo agrega al array cart[]
   ↓
5. updateCart() actualiza la interfaz
   ↓
6. saveCart() guarda en localStorage
```

#### Código clave:
```javascript
// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
    updateCart();
    saveCart();
}

// Guardar en localStorage
function saveCart() {
    localStorage.setItem('lumeor_cart', JSON.stringify(cart));
}
```

#### Ejercicio práctico:
1. Abre la consola del navegador (F12)
2. Agrega productos al carrito
3. Escribe: `console.log(cart)`
4. Observa el array

---

### **Día 5: LocalStorage** 💾

#### ¿Qué es localStorage?
Almacenamiento del navegador que persiste entre sesiones.

#### Funciones clave:
```javascript
// Guardar
localStorage.setItem('clave', 'valor');

// Leer
const valor = localStorage.getItem('clave');

// Eliminar
localStorage.removeItem('clave');

// Para objetos (usar JSON)
localStorage.setItem('cart', JSON.stringify(cart));
const cart = JSON.parse(localStorage.getItem('cart'));
```

#### Ejercicio práctico:
1. Agrega productos al carrito
2. Cierra el navegador
3. Vuelve a abrir la página
4. El carrito sigue ahí ✅

---

### **Día 6: Bootstrap** 🅱️

#### Componentes usados:
1. **Grid System**
   ```html
   <div class="row">
       <div class="col-lg-4 col-md-6 col-sm-12">
           <!-- Contenido -->
       </div>
   </div>
   ```

2. **Navbar**
   ```html
   <nav class="navbar navbar-expand-lg">
       <!-- Menú -->
   </nav>
   ```

3. **Modal**
   ```html
   <div class="modal fade" id="carritoModal">
       <!-- Contenido del modal -->
   </div>
   ```

4. **Botones**
   ```html
   <button class="btn btn-custom">Click</button>
   ```

#### Ejercicio práctico:
Cambia el grid de productos:
```html
<!-- De 3 columnas a 4 columnas -->
<div class="col-lg-3 col-md-6">
```

---

## 🔍 Debugging - Cómo Investigar

### 1. Consola del navegador (F12)
```javascript
console.log('Hola'); // Imprime en consola
console.log(cart);   // Ver contenido del carrito
console.table(products); // Ver productos en tabla
```

### 2. Inspeccionar elementos
- Clic derecho → Inspeccionar
- Ver HTML en tiempo real
- Ver estilos CSS aplicados

### 3. Breakpoints
- Pestaña "Sources" en DevTools
- Clic en número de línea
- El código se pausa ahí

---

## 💡 Experimentos Sugeridos

### Experimento 1: Cambiar colores
```css
/* En styles-simple.css */
:root {
    --beige: #ff6b6b;  /* Rojo coral */
    --negro: #2c3e50;  /* Azul oscuro */
}
```

### Experimento 2: Agregar más productos
```javascript
// En main-simple.js
const products = [
    // ... productos existentes
    {
        id: 7,
        name: "Chaqueta de Cuero",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    }
];
```

### Experimento 3: Cambiar animaciones
```css
/* En styles-simple.css */
.product-card:hover {
    transform: scale(1.05); /* En vez de translateY */
}
```

### Experimento 4: Modificar el hero
```html
<!-- En index-simple.html -->
<h1 class="hero-title">Tu Nuevo Título</h1>
<p class="hero-subtitle">Tu nuevo subtítulo</p>
```

---

## 🎓 Conceptos Clave por Archivo

### **index-simple.html**
- ✅ Estructura semántica
- ✅ Bootstrap grid
- ✅ Modales
- ✅ Formularios
- ✅ Enlaces internos

### **styles-simple.css**
- ✅ Variables CSS
- ✅ Flexbox
- ✅ Posicionamiento (absolute, relative, fixed)
- ✅ Transiciones y animaciones
- ✅ Media queries
- ✅ Pseudo-clases (:hover)

### **main-simple.js**
- ✅ Arrays y objetos
- ✅ Funciones
- ✅ DOM manipulation
- ✅ Event listeners
- ✅ LocalStorage
- ✅ Template literals
- ✅ Array methods (find, filter, forEach, reduce)

---

## 🛠️ Herramientas Útiles

### 1. Visual Studio Code
- Extensión: Live Server
- Extensión: Prettier (formatear código)
- Extensión: Auto Rename Tag

### 2. Chrome DevTools
- F12 → Consola
- F12 → Elements (inspeccionar)
- F12 → Network (ver peticiones)

### 3. Recursos Online
- [MDN Web Docs](https://developer.mozilla.org/) - Documentación
- [CSS-Tricks](https://css-tricks.com/) - Guías CSS
- [Bootstrap Docs](https://getbootstrap.com/) - Componentes

---

## 📝 Checklist de Aprendizaje

### HTML
- [ ] Entiendo la estructura básica
- [ ] Sé usar divs y sections
- [ ] Entiendo clases vs IDs
- [ ] Puedo crear formularios
- [ ] Entiendo Bootstrap grid

### CSS
- [ ] Sé usar selectores
- [ ] Entiendo el box model
- [ ] Puedo usar flexbox
- [ ] Entiendo media queries
- [ ] Sé crear animaciones

### JavaScript
- [ ] Entiendo variables (let, const)
- [ ] Puedo crear funciones
- [ ] Sé manipular el DOM
- [ ] Entiendo event listeners
- [ ] Puedo usar arrays y objetos
- [ ] Entiendo localStorage

---

## 🎯 Proyecto Final Sugerido

Después de estudiar, intenta:

### Nivel 1: Modificaciones
- [ ] Cambiar todos los colores
- [ ] Agregar 3 productos nuevos
- [ ] Cambiar textos y títulos
- [ ] Modificar el footer

### Nivel 2: Nuevas Funciones
- [ ] Agregar un buscador de productos
- [ ] Crear una sección "Favoritos"
- [ ] Agregar botón "Vaciar carrito"
- [ ] Mostrar descuentos

### Nivel 3: Características Avanzadas
- [ ] Sistema de filtros por precio
- [ ] Ordenar productos (A-Z, precio)
- [ ] Galería de imágenes por producto
- [ ] Contador de stock

---

## 🐛 Problemas Comunes

### Problema 1: Los productos no aparecen
```javascript
// Verifica en consola:
console.log(products); // ¿Hay productos?
console.log(productsContainer); // ¿Existe el elemento?
```

### Problema 2: El carrito no guarda
```javascript
// Verifica localStorage:
console.log(localStorage.getItem('lumeor_cart'));
```

### Problema 3: Los estilos no se aplican
```html
<!-- Verifica la ruta del CSS -->
<link rel="stylesheet" href="css/styles-simple.css">
```

### Problema 4: JavaScript no funciona
```html
<!-- Verifica que esté al final del body -->
<script src="js/main-simple.js"></script>
</body>
```

---

## 📞 Siguiente Nivel

Cuando domines esta versión:

1. **Estudia la versión completa** (`index.html`)
2. **Aprende un framework** (React, Vue)
3. **Agrega un backend** (Node.js, PHP)
4. **Conecta una base de datos** (MySQL, MongoDB)

---

## 🎉 Consejos Finales

1. **No te apures** - Aprende un concepto a la vez
2. **Experimenta** - Rompe cosas y arreglalas
3. **Usa console.log()** - Es tu mejor amigo
4. **Lee los comentarios** - Están ahí para ayudarte
5. **Practica diario** - 30 minutos al día es suficiente

---

**¡Feliz aprendizaje!** 🚀

Si tienes dudas, revisa los comentarios en el código o busca en MDN Web Docs.

---

**Versión:** Simple 1.0  
**Última actualización:** Octubre 2025  
**Nivel:** Principiante - Intermedio
