# 🚀 Guía de Despliegue - GitHub Pages

## Despliegue Automático en GitHub Pages

Este proyecto está configurado para ser desplegado automáticamente en GitHub Pages. Sigue estos pasos para activar el despliegue:

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: [https://github.com/leomos2022/SGSI-Direcci-n-Estrat-gica](https://github.com/leomos2022/SGSI-Direcci-n-Estrat-gica)
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral izquierdo, busca **Pages**
4. En **Source**, selecciona **Deploy from a branch**
5. En **Branch**, selecciona **main** y **/(root)**
6. Haz clic en **Save**

### 2. Configuración del Sitio

El proyecto incluye:
- `_config.yml`: Configuración de Jekyll para GitHub Pages
- `index.md`: Página principal en Markdown (alternativa a index.html)
- `index.html`: Aplicación web completa
- `login.html`: Página de acceso de empleados

### 3. Estructura de Despliegue

```
📁 SGSI-Dirección-Estratégica/
├── 📄 index.md (página principal de GitHub Pages)
├── 📄 index.html (aplicación web completa)
├── 📄 login.html (página de login)
├── 📁 css/ (estilos)
├── 📁 js/ (funcionalidades)
├── 📁 assets/ (recursos visuales)
├── 📄 _config.yml (configuración Jekyll)
└── 📄 README.md (documentación)
```

### 4. URLs de Acceso

Una vez desplegado, tu sitio estará disponible en:
- **URL principal**: `https://leomos2022.github.io/SGSI-Direcci-n-Estrat-gica/`
- **Aplicación web**: `https://leomos2022.github.io/SGSI-Direcci-n-Estrat-gica/index.html`
- **Login**: `https://leomos2022.github.io/SGSI-Direcci-n-Estrat-gica/login.html`

### 5. Personalización del Dominio (Opcional)

Si deseas usar un dominio personalizado:
1. En **Settings > Pages**, agrega tu dominio en **Custom domain**
2. Configura los registros DNS de tu proveedor de dominio
3. Marca la opción **Enforce HTTPS**

### 6. Actualizaciones Automáticas

Cada vez que hagas `git push` a la rama `main`, GitHub Pages se actualizará automáticamente en unos minutos.

## 🔧 Solución de Problemas

### El sitio no se despliega
- Verifica que GitHub Pages esté habilitado en Settings > Pages
- Asegúrate de que la rama sea `main` y la carpeta sea `/ (root)`
- Revisa los logs de GitHub Actions si están habilitados

### Los estilos no se cargan
- Verifica que las rutas en los archivos HTML sean relativas
- Asegúrate de que los archivos CSS y JS estén en las carpetas correctas

### Imágenes no se muestran
- Verifica que las rutas de las imágenes sean relativas
- Asegúrate de que los archivos de imagen estén en la carpeta `assets/`

## 📱 Características del Sitio

- **Responsivo**: Se adapta a dispositivos móviles y de escritorio
- **Modo oscuro/claro**: Interfaz personalizable
- **Navegación intuitiva**: Menú de navegación fácil de usar
- **Contenido educativo**: Información completa sobre auditoría interna SGSI
- **Accesibilidad**: Diseñado siguiendo estándares de accesibilidad web

## 🎯 Próximos Pasos

1. **Habilitar GitHub Pages** siguiendo los pasos anteriores
2. **Verificar el despliegue** visitando la URL del sitio
3. **Personalizar el contenido** según tus necesidades
4. **Agregar funcionalidades** adicionales si es necesario
5. **Configurar analytics** para monitorear el tráfico del sitio

---

**Nota**: Este sitio está optimizado para GitHub Pages y utiliza Jekyll como motor de renderizado. Los archivos HTML estáticos también funcionarán perfectamente.
