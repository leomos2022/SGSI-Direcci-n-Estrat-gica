# 🚀 Deployment en GitHub Pages

## ✅ Estado Actual
- ✅ Repositorio sincronizado con GitHub
- ✅ Imagen de auditoría actualizada (`auditoria-fondo.jpg`)
- ✅ Configuración Jekyll lista (`_config.yml`)
- ✅ Cambios subidos al repositorio remoto

## 🌐 Activación de GitHub Pages

### 1. Ir a la Configuración del Repositorio
1. Ve a: https://github.com/leomos2022/SGSI-Direcci-n-Estrat-gica
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**

### 2. Configurar GitHub Pages
1. En **Source**, selecciona **Deploy from a branch**
2. En **Branch**, selecciona **main**
3. En **Folder**, selecciona **/(root)**
4. Haz clic en **Save**

### 3. Esperar el Deploy
- GitHub Pages tardará unos minutos en hacer el deploy
- Verás un mensaje verde: "Your site is published at [URL]"
- La URL será: `https://leomos2022.github.io/SGSI-Direcci-n-Estrat-gica/`

## 🔧 Verificación del Deploy

### Verificar que la Imagen se Muestre
1. Abre la URL de GitHub Pages
2. Verifica que la imagen de auditoría aparezca como fondo
3. El título "Auditoría Interna SGSI - XYZ Corp" debe ser legible

### Si hay Problemas
1. Verifica que la imagen esté en `assets/auditoria-fondo.jpg`
2. Revisa la consola del navegador para errores
3. Verifica que el CSS esté cargando correctamente

## 📁 Estructura del Proyecto
```
XYZ-INC/
├── index.html          # Página principal
├── _config.yml         # Configuración Jekyll
├── assets/
│   └── auditoria-fondo.jpg  # Imagen de fondo
├── css/
│   └── style.css       # Estilos
└── js/
    └── script.js       # JavaScript
```

## 🎯 Próximos Pasos
1. ✅ Activar GitHub Pages en la configuración del repositorio
2. ✅ Esperar el deploy automático
3. ✅ Verificar que la imagen se muestre correctamente
4. ✅ Probar la funcionalidad en el sitio desplegado

---
**Nota**: GitHub Pages se actualiza automáticamente cada vez que hagas push a la rama main.
