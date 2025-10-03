# 🚀 Inicio Rápido - Luméor

## ⚡ Levantar la página en 3 pasos

### 1. Abre PowerShell en esta carpeta
```powershell
cd "c:\Users\Elías\OneDrive\Documentos\Luméor\Lum-or"
```

### 2. Inicia Docker Compose
```powershell
docker-compose up -d
```

### 3. Abre tu navegador
```
http://localhost:8085
```

---

## 🛑 Detener la página

```powershell
docker-compose down
```

---

## 🔄 Ver cambios después de editar archivos

```powershell
docker-compose restart
```

---

## 📊 Ver logs (si algo falla)

```powershell
docker-compose logs -f
```

---

## ✅ Verificar que Docker está corriendo

```powershell
docker ps
```

Deberías ver: **lumeor-tienda** en la lista

---

## 🎨 Archivos que puedes editar

- **index.html** - Contenido de la página
- **css/styles.css** - Estilos y colores
- **js/main.js** - Funcionalidad

Después de editar, ejecuta: `docker-compose restart`

---

## 📱 Probar en móvil

1. Encuentra tu IP local: `ipconfig` (busca IPv4)
2. En tu móvil: `http://TU-IP:8085`
   Ejemplo: `http://192.168.1.100:8085`

---

## 🆘 Problemas comunes

### Puerto ocupado
```powershell
# Cambiar puerto en docker-compose.yml
# Línea 7: "8085:80" → "8090:80"
```

### Docker no responde
```powershell
# Reiniciar Docker Desktop
# Ejecutar PowerShell como Administrador
```

### Página no carga
```powershell
# Verificar que Docker Desktop está corriendo
# Verificar logs: docker-compose logs
```

---

**¡Listo para empezar!** 🎉
