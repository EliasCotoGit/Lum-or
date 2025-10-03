# 📁 Estructura del Proyecto Luméor

## Organización de Carpetas y Archivos

```
Lum-or/
│
├── css/
│   └── styles.css          # Estilos personalizados de la página
│
├── js/
│   └── main.js             # JavaScript para funcionalidad e interactividad
│
├── index.html              # Página principal (HTML5)
├── docker-compose.yml      # Configuración de Docker Compose
├── Dockerfile              # Instrucciones para construir la imagen Docker
├── nginx.conf              # Configuración del servidor Nginx
├── .dockerignore           # Archivos ignorados por Docker
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Documentación principal
└── ESTRUCTURA.md           # Este archivo - Explicación de la estructura
```

---

## 📄 Descripción Detallada de Archivos

### **1. index.html**
**Propósito:** Archivo principal de la página web.

**Contenido:**
- **Estructura HTML5 semántica** con meta tags para SEO y responsive design
- **Navegación fija** con menú hamburguesa para móviles
- **Carrusel de imágenes** (Hero Section) usando Bootstrap
- **Secciones principales:**
  - Hero/Inicio con carrusel de 3 imágenes
  - Categorías (Mujer, Hombre, Accesorios)
  - Colección de productos con filtros
  - Sobre Nosotros
  - Contacto con formulario
  - Footer con enlaces y newsletter
- **Modales:**
  - Modal de Cuenta (Login/Registro)
  - Modal de Carrito de Compras
- **Enlaces a:**
  - Bootstrap 5.3.2 (CSS y JS)
  - Google Fonts (Playfair Display y Poppins)
  - Font Awesome 6.4.0 (iconos)
  - Archivos CSS y JS personalizados

---

### **2. css/styles.css**
**Propósito:** Estilos personalizados para toda la página.

**Características:**
- **Variables CSS** para colores principales (blanco, beige, negro)
- **Diseño responsive** con media queries para móviles, tablets y desktop
- **Estilos para:**
  - Navegación con efectos hover y scroll
  - Hero section con overlay y animaciones
  - Cards de productos y categorías
  - Formularios y botones personalizados
  - Modales
  - Footer
- **Animaciones CSS:**
  - fadeIn, fadeInUp, slideInLeft
  - Transiciones suaves en hover
  - Efectos de zoom en imágenes
- **Tipografía:**
  - Playfair Display para títulos
  - Poppins para texto general

**Paleta de Colores:**
- Blanco principal: `#FFFFFF`
- Beige: `#d4c5b9`
- Negro: `#1a1a1a`
- Grises y tonos secundarios

---

### **3. js/main.js**
**Propósito:** Funcionalidad e interactividad de la página.

**Funciones principales:**

#### **a) Gestión de Productos**
- Array de 12 productos con datos (nombre, categoría, precio, imagen)
- Función `displayProducts()` para mostrar productos
- Función `createProductCard()` para generar HTML de cada producto
- Sistema de filtros por categoría (Todos, Mujer, Hombre, Accesorios)

#### **b) Carrito de Compras**
- `addToCart()` - Agregar productos al carrito
- `removeFromCart()` - Eliminar productos
- `updateCart()` - Actualizar contador y total
- `saveCart()` / `loadCart()` - Persistencia con localStorage
- Cálculo automático de totales

#### **c) Formularios**
- Validación y manejo de:
  - Formulario de contacto
  - Login y registro
  - Newsletter
  - Checkout
- Mensajes de confirmación

#### **d) Efectos Visuales**
- Navbar con efecto al hacer scroll
- Smooth scroll para navegación
- Sistema de notificaciones (toasts)
- Intersection Observer para animaciones al scroll

#### **e) Interactividad**
- Filtros de productos con botones
- Modales de Bootstrap
- Cierre automático de menú móvil
- Actualización dinámica del carrito

---

### **4. docker-compose.yml**
**Propósito:** Orquestar el contenedor Docker de forma sencilla.

**Configuración:**
- **Servicio:** `lumeor-web`
- **Imagen:** nginx:alpine (ligera y eficiente)
- **Puerto:** 8085 (externo) → 80 (interno)
- **Volúmenes:**
  - Monta el proyecto en `/usr/share/nginx/html`
  - Monta configuración de nginx
- **Red:** `lumeor-network` (bridge)
- **Restart policy:** `unless-stopped`

**Ventajas:**
- Un solo comando para levantar la aplicación
- Fácil de mantener y modificar
- Aislamiento del sistema host

---

### **5. Dockerfile**
**Propósito:** Instrucciones para construir la imagen Docker.

**Pasos:**
1. Usa imagen base `nginx:alpine`
2. Copia archivos del proyecto a `/usr/share/nginx/html`
3. Copia configuración personalizada de nginx
4. Expone puerto 80
5. Inicia nginx en modo foreground

---

### **6. nginx.conf**
**Propósito:** Configuración del servidor web Nginx.

**Características:**
- **Puerto:** 80
- **Root:** `/usr/share/nginx/html`
- **Index:** `index.html`
- **Caché:**
  - 1 año para recursos estáticos (CSS, JS, imágenes)
  - No-cache para HTML
- **Compresión gzip** para mejorar velocidad
- **Headers de seguridad:**
  - X-Frame-Options
  - X-Content-Type-Options
  - X-XSS-Protection
- **Logs:** access y error logs

---

### **7. .dockerignore**
**Propósito:** Excluir archivos innecesarios de la imagen Docker.

**Excluye:**
- Archivos de Git
- Documentación
- Archivos de sistema
- Logs

---

### **8. .gitignore**
**Propósito:** Excluir archivos del control de versiones.

**Excluye:**
- Archivos de sistema operativo
- Logs
- Configuraciones de editores
- Archivos temporales

---

### **9. README.md**
**Propósito:** Documentación principal del proyecto.

**Incluye:**
- Descripción del proyecto
- Características principales
- Requisitos previos
- Instrucciones de instalación
- Comandos para ejecutar
- Estructura del proyecto
- Tecnologías utilizadas
- Capturas de pantalla (opcional)

---

## 🎨 Diseño y Estilo

### **Colores Principales**
- **Blanco (#FFFFFF):** Color dominante, usado en fondos y texto sobre oscuro
- **Beige (#d4c5b9):** Color de acento para botones, enlaces y detalles
- **Negro (#1a1a1a):** Texto principal y elementos de contraste

### **Tipografía**
- **Playfair Display:** Títulos y marca (elegante, serif)
- **Poppins:** Texto general (moderna, sans-serif)

### **Responsive Design**
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

---

## 🔧 Tecnologías Utilizadas

### **Frontend**
- **HTML5:** Estructura semántica
- **CSS3:** Estilos personalizados, animaciones, flexbox, grid
- **JavaScript (ES6+):** Funcionalidad e interactividad

### **Frameworks y Librerías**
- **Bootstrap 5.3.2:** Sistema de grid, componentes, responsive
- **Font Awesome 6.4.0:** Iconos
- **Google Fonts:** Tipografías

### **Backend/Servidor**
- **Nginx:** Servidor web ligero y rápido
- **Docker:** Contenedorización
- **Docker Compose:** Orquestación

---

## 📱 Características Responsive

### **Navegación**
- Desktop: Menú horizontal
- Mobile: Menú hamburguesa (collapse)

### **Hero Section**
- Desktop: 90vh de altura
- Mobile: 70vh de altura
- Texto adaptado en tamaño

### **Productos**
- Desktop: 4 columnas (col-lg-3)
- Tablet: 3 columnas (col-md-4)
- Mobile: 2 columnas (col-sm-6)

### **Formularios**
- Inputs y botones adaptados
- Espaciado optimizado para touch

---

## 🚀 Flujo de Usuario

1. **Entrada:** Usuario accede a `http://localhost:8085`
2. **Hero:** Ve carrusel con 3 imágenes promocionales
3. **Categorías:** Explora categorías (Mujer, Hombre, Accesorios)
4. **Productos:** Filtra y navega por 12 productos
5. **Carrito:** Agrega productos al carrito
6. **Cuenta:** Puede registrarse o iniciar sesión
7. **Contacto:** Envía mensajes a través del formulario
8. **Checkout:** Procede al pago desde el carrito

---

## 💾 Persistencia de Datos

### **LocalStorage**
- **Carrito de compras:** Se guarda automáticamente
- **Clave:** `lumeor_cart`
- **Formato:** JSON
- **Persistencia:** Sobrevive a recargas de página

---

## 🔐 Seguridad

### **Headers HTTP (nginx.conf)**
- `X-Frame-Options: SAMEORIGIN` - Previene clickjacking
- `X-Content-Type-Options: nosniff` - Previene MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Protección XSS

### **Validación**
- Formularios con validación HTML5
- Required fields en inputs críticos

---

## 🎯 Próximas Mejoras (Opcionales)

1. **Backend real:** Node.js/Express o PHP
2. **Base de datos:** MySQL/PostgreSQL para productos
3. **Autenticación:** JWT o sesiones
4. **Pasarela de pago:** Stripe/PayPal
5. **Panel de administración:** CRUD de productos
6. **Búsqueda:** Buscador de productos
7. **Wishlist:** Lista de deseos
8. **Reviews:** Reseñas de productos
9. **Multi-idioma:** Español/Inglés
10. **PWA:** Progressive Web App

---

## 📞 Soporte

Para dudas o problemas:
- Email: contacto@lumeor.com
- GitHub Issues: [Tu repositorio]

---

**Última actualización:** Octubre 2025
**Versión:** 1.0.0
