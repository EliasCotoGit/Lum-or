# 🛍️ Luméor - Tienda de Ropa Exclusiva

![Luméor](https://img.shields.io/badge/Version-1.0.0-beige)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

## 📖 Descripción

**Luméor** es una tienda de ropa en línea elegante y moderna que ofrece piezas exclusivas, finas y únicas. Con un diseño minimalista en tonos blanco, beige y negro, la página proporciona una experiencia de compra sofisticada y fácil de usar.

Este proyecto es una aplicación web completa desarrollada con HTML5, CSS3, JavaScript y Bootstrap, containerizada con Docker para facilitar su despliegue.

---

## ✨ Características Principales

### 🎨 Diseño
- **Paleta de colores elegante:** Blanco predominante, beige y negro
- **Diseño responsive:** Optimizado para desktop, tablet y móvil
- **Animaciones suaves:** Transiciones y efectos visuales modernos
- **Tipografía premium:** Playfair Display y Poppins

### 🛒 Funcionalidades
- **Carrusel de imágenes** en la sección hero
- **Catálogo de productos** con 12 artículos
- **Filtros por categoría:** Mujer, Hombre, Accesorios
- **Carrito de compras** con persistencia (localStorage)
- **Sistema de autenticación** (Login/Registro)
- **Formulario de contacto**
- **Newsletter** para suscripciones
- **Menú hamburguesa** para móviles

### 🚀 Tecnología
- **Containerización con Docker**
- **Servidor Nginx optimizado**
- **Código limpio y comentado**
- **Fácil de mantener y escalar**

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos personalizados y animaciones |
| **JavaScript (ES6+)** | Funcionalidad e interactividad |
| **Bootstrap 5.3.2** | Framework CSS responsive |
| **Font Awesome 6.4.0** | Iconos |
| **Google Fonts** | Tipografías (Playfair Display, Poppins) |
| **Docker** | Containerización |
| **Docker Compose** | Orquestación de contenedores |
| **Nginx** | Servidor web |

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Docker Desktop** (Windows/Mac) o **Docker Engine** (Linux)
- **Docker Compose** (incluido en Docker Desktop)
- Un navegador web moderno (Chrome, Firefox, Edge, Safari)

### Verificar instalación de Docker

```powershell
docker --version
docker-compose --version
```

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar o descargar el proyecto

Si tienes Git instalado:
```powershell
git clone https://github.com/tu-usuario/lumeor.git
cd lumeor
```

O simplemente navega a la carpeta del proyecto:
```powershell
cd "c:\Users\Elías\OneDrive\Documentos\Luméor\Lum-or"
```

### 2️⃣ Levantar la aplicación con Docker Compose

```powershell
docker-compose up -d
```

**Explicación del comando:**
- `docker-compose up`: Inicia los servicios definidos en `docker-compose.yml`
- `-d`: Modo detached (segundo plano)

### 3️⃣ Verificar que el contenedor está corriendo

```powershell
docker ps
```

Deberías ver algo como:
```
CONTAINER ID   IMAGE          PORTS                  NAMES
abc123def456   nginx:alpine   0.0.0.0:8085->80/tcp   lumeor-tienda
```

### 4️⃣ Abrir en el navegador

Abre tu navegador y visita:
```
http://localhost:8085
```

🎉 **¡Listo!** La tienda Luméor debería estar funcionando.

---

## 🎮 Comandos Útiles

### Ver logs del contenedor
```powershell
docker-compose logs -f
```

### Detener la aplicación
```powershell
docker-compose down
```

### Reiniciar la aplicación
```powershell
docker-compose restart
```

### Reconstruir la imagen (después de cambios)
```powershell
docker-compose up -d --build
```

### Eliminar contenedor y volúmenes
```powershell
docker-compose down -v
```

### Ver estado de contenedores
```powershell
docker ps -a
```

---

## 📁 Estructura del Proyecto

```
Lum-or/
│
├── css/
│   └── styles.css              # Estilos personalizados
│
├── js/
│   └── main.js                 # JavaScript principal
│
├── index.html                  # Página principal
├── docker-compose.yml          # Configuración Docker Compose
├── Dockerfile                  # Instrucciones Docker
├── nginx.conf                  # Configuración Nginx
├── .dockerignore               # Archivos ignorados por Docker
├── .gitignore                  # Archivos ignorados por Git
├── README.md                   # Este archivo
└── ESTRUCTURA.md               # Documentación detallada
```

Para una explicación detallada de cada archivo, consulta [ESTRUCTURA.md](ESTRUCTURA.md).

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Blanco | `#FFFFFF` | Fondo principal, texto sobre oscuro |
| Beige | `#d4c5b9` | Acentos, botones, enlaces |
| Negro | `#1a1a1a` | Texto principal, footer |
| Gris Claro | `#f5f5f5` | Fondos secundarios |

---

## 📱 Responsive Design

La página está optimizada para diferentes dispositivos:

| Dispositivo | Breakpoint | Características |
|-------------|------------|-----------------|
| **Desktop** | ≥ 1200px | 4 columnas de productos |
| **Tablet** | 768px - 1199px | 3 columnas de productos |
| **Mobile** | < 768px | 2 columnas, menú hamburguesa |

---

## 🌟 Características Destacadas

### 1. Carrusel Hero
- 3 imágenes rotativas de alta calidad
- Overlay oscuro para mejor legibilidad
- Botones de navegación y indicadores
- Texto animado con fadeIn

### 2. Sistema de Filtros
- Filtrar productos por categoría
- Animación suave al cambiar filtros
- Botones con estado activo

### 3. Carrito de Compras
- Agregar/eliminar productos
- Contador en tiempo real
- Cálculo automático de totales
- Persistencia con localStorage
- Modal elegante

### 4. Formularios
- Validación HTML5
- Diseño limpio y accesible
- Mensajes de confirmación
- Tabs para Login/Registro

### 5. Animaciones
- Fade in al hacer scroll
- Hover effects en productos
- Zoom en imágenes
- Smooth scroll

---

## 🔧 Configuración Avanzada

### Cambiar el puerto

Edita `docker-compose.yml`:
```yaml
ports:
  - "8085:80"  # Cambia 8085 por el puerto que desees
```

### Modificar configuración de Nginx

Edita `nginx.conf` para:
- Cambiar caché
- Agregar redirects
- Configurar SSL (HTTPS)
- Ajustar compresión

---

## 🐛 Solución de Problemas

### El puerto 8085 ya está en uso
```powershell
# Ver qué proceso usa el puerto
netstat -ano | findstr :8085

# Cambiar el puerto en docker-compose.yml
# O detener el proceso que lo está usando
```

### Docker no inicia
```powershell
# Verificar que Docker Desktop está corriendo
# Reiniciar Docker Desktop
# Verificar permisos de administrador
```

### Cambios no se reflejan
```powershell
# Limpiar caché del navegador (Ctrl + Shift + R)
# Reconstruir contenedor
docker-compose up -d --build
```

### Error de permisos
```powershell
# Ejecutar PowerShell como administrador
# Verificar que Docker tiene permisos
```

---

## 📚 Recursos de Aprendizaje

### HTML/CSS/JavaScript
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)

### Bootstrap
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)

### Docker
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🎯 Próximos Pasos

Como estás aprendiendo desarrollo web, aquí hay algunas ideas para expandir el proyecto:

### Nivel Principiante
1. ✅ Cambiar colores y tipografías
2. ✅ Agregar más productos
3. ✅ Modificar textos e imágenes
4. ✅ Agregar nuevas secciones

### Nivel Intermedio
1. 🔄 Conectar con una API de productos
2. 🔄 Agregar búsqueda de productos
3. 🔄 Implementar paginación
4. 🔄 Agregar wishlist (lista de deseos)

### Nivel Avanzado
1. 🚀 Backend con Node.js/Express
2. 🚀 Base de datos (MongoDB/PostgreSQL)
3. 🚀 Autenticación real (JWT)
4. 🚀 Pasarela de pago (Stripe)
5. 🚀 Panel de administración

---

## 🤝 Contribuciones

Este es un proyecto de aprendizaje. Siéntete libre de:
- Hacer fork del proyecto
- Crear issues
- Enviar pull requests
- Compartir mejoras

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👨‍💻 Autor

**Elías**
- Proyecto de aprendizaje de desarrollo web
- Tienda Luméor - Moda Exclusiva

---

## 📞 Contacto

Para preguntas o sugerencias:
- Email: contacto@lumeor.com
- GitHub: [Tu perfil]

---

## 🙏 Agradecimientos

- **Bootstrap** por el framework CSS
- **Font Awesome** por los iconos
- **Google Fonts** por las tipografías
- **Unsplash** por las imágenes de ejemplo
- **Nginx** por el servidor web
- **Docker** por la containerización

---

## 📝 Notas Finales

Este proyecto fue creado con fines educativos para aprender:
- Desarrollo web frontend
- Diseño responsive
- JavaScript moderno
- Docker y containerización
- Buenas prácticas de código

**¡Disfruta explorando y aprendiendo!** 🚀

---

**Versión:** 1.0.0  
**Última actualización:** Octubre 2025  
**Estado:** ✅ Producción
