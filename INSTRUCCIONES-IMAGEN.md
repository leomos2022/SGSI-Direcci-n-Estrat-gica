# 🖼️ Instrucciones para Agregar la Imagen de Fondo

## Imagen de Fondo para la Sección de Auditoría

He configurado el CSS para usar una imagen de fondo en la sección "Plan de Auditoría Interna para XYZ Corp". 

### 📁 Ubicación de la Imagen

La imagen debe colocarse en:
```
assets/auditoria-fondo.jpg
```

### 🎯 Características de la Imagen

**Descripción de la imagen que quieres usar:**
- Escritorio blanco con elementos de auditoría financiera
- Calculadora, lupa, documentos con cifras en euros
- Gafas sobre documentos de facturación
- Monedas de oro apiladas
- Ambiente profesional de trabajo financiero

### 📐 Especificaciones Técnicas Recomendadas

- **Formato**: JPG o PNG
- **Resolución mínima**: 1920x1080 píxeles
- **Resolución recomendada**: 2560x1440 píxeles
- **Tamaño de archivo**: Máximo 2MB para mejor rendimiento
- **Orientación**: Horizontal (landscape)

### 🔧 Cómo Agregar la Imagen

1. **Descarga o crea la imagen** con las características descritas
2. **Renombra la imagen** como `auditoria-fondo.jpg`
3. **Colócala en la carpeta** `assets/` del proyecto
4. **Reemplaza el archivo placeholder** existente

### ✨ Efectos Aplicados

El CSS ya está configurado para:
- **Fondo fijo** (parallax effect)
- **Overlay oscuro** para legibilidad del texto
- **Texto blanco** con sombra para contraste
- **Tarjetas semi-transparentes** con efecto glassmorphism
- **Títulos dorados** (#ffd700) para destacar
- **Efectos hover** en las tarjetas
- **Diseño responsivo** para móviles

### 📱 Responsive Design

- **Desktop**: Fondo fijo con efecto parallax
- **Tablet**: Fondo fijo
- **Móvil**: Fondo scroll (sin efecto parallax para mejor rendimiento)

### 🎨 Personalización Adicional

Si quieres ajustar:
- **Opacidad del overlay**: Modifica `rgba(0, 0, 0, 0.7)` en el CSS
- **Color de los títulos**: Cambia `#ffd700` por otro color
- **Efecto blur**: Ajusta `backdrop-filter: blur(10px)`

### 🚀 Después de Agregar la Imagen

1. **Prueba localmente**: `python3 -m http.server 8000`
2. **Verifica la legibilidad** del texto
3. **Comprueba en diferentes dispositivos**
4. **Haz commit y push** a GitHub
5. **Verifica el despliegue** en GitHub Pages

---

**Nota**: La imagen se aplicará automáticamente una vez que coloques el archivo en la carpeta `assets/` con el nombre correcto.
