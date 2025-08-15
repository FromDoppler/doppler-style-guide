# 🎨 Doppler Style Guide

Librería de componentes desarrollada con **modelo de caja flex** para mantener un diseño consistente en Doppler.
Incluye **documentación visual** y **Storybook** para el desarrollo de UI.

---

## 📦 Requerimientos

```
* node : >=21.7.3
* Yarn
```

---

## ⚙️ Instalación

```bash
yarn
yarn build
yarn dev
```

---

## 🚀 Modo desarrollo

Al ejecutar:

```bash
yarn dev
```

Se levantan **dos entornos** en paralelo:

1. 📚 **Documentación** (asociada a `documentation/templates`):
   👉 [http://localhost:3500/documentation/index.html](http://localhost:3500/documentation/index.html)

2. 🧩 **Storybook**:
   👉 [http://localhost:6006/?path=/story/example-introduction--page](http://localhost:6006/?path=/story/example-introduction--page)

---

## 📜 Scripts disponibles

- `yarn dev` → Levanta Webpack Dev Server para documentación y Storybook de forma concurrente.
- `yarn build` → Genera la build de producción de documentación y Storybook.
- `yarn build-webpack` → Build solo de la documentación.
- `yarn build-storybook` → Build solo de Storybook.
- `yarn fix-format` → Formatea con Prettier y corrige encoding/líneas finales con eclint.
- `yarn verify-format` → Verifica que el código esté formateado correctamente.
- `yarn prettier-fix` / `yarn prettier-check` → Corre/verifica Prettier.
- `yarn eclint-fix` / `yarn eclint-check` → Corrige/verifica configuración de eclint.

---

## ✅ Validaciones

```bash
yarn fix-format
yarn verify-format
```

---

## 🧪 Probar un Pull Request sin mergear

Ejemplo de PR:

```
https://github.com/FromDoppler/doppler-style-guide/pull/551
```

Para probar en el CDN usar el número de PR:

```
https://cdn.fromdoppler.com/doppler-style-guide/documentation/pr-551/storybook/?path=/story/components-contact-policy--default
```

---

## 🌐 URL CDN y Storybook

- **CDN Main**

  ```
  https://cdn.fromdoppler.com/doppler-style-guide/documentation/main/index.html
  ```

- **Storybook PR Example**
  ```
  https://cdn.fromdoppler.com/doppler-style-guide/documentation/pr-530/storybook/?path=/story/example-introduction--page
  ```

---

## 🛠 Dependencias principales

- **⚡ Webpack 5** → Empaquetado de la documentación (`webpack`, `webpack-cli`, `webpack-dev-server`, `html-webpack-plugin`).
- **🧩 Storybook 6.5** → Documentación interactiva de componentes (`@storybook/*`).
- **🎨 Sass** → Estilos (`sass`, `sass-loader`).
- **📊 Billboard.js** → Gráficos interactivos.
- **🌀 jQuery** → Funcionalidades legacy.

---

## 📌 Recordatorio

> ✅ Hacer features chicas
> ✅ Agregar a Storybook
> ✅ Validar el diseño
> ✅ Probar en INT
> ✅ Merge a main
> ✅ Sacar tag de versión para producción
> ✅ Mantener actualizado el repositorio

---

## ⚠️ Consideraciones

En los estilos existe un archivo `_classes.scss` con muchos fixes para el **Doppler viejo**.
En el resto de la app **NO** se debe usar `!important`, ya que dificulta la reutilización de componentes.

---

## ➕ Cómo agregar un nuevo ícono SVG

1. **Agregar el SVG**
   Colocar el archivo en:

   ```
   assets/icons/svg-icons/
   ```

2. **Definir el estilo del ícono**
   En el archivo de estilos src\assets\scss\helpers\icons-svg_icons-svg.scss, agregar:

   ```scss
   .icon-[nombre-del-icono] {
     @extend .icon-svg;
     --icon-url: url("assets/icons/svg-icons/[nombre-del-archivo].svg");
   }
   ```

3. **Agregarlo en la documentación HTML**
   En `documentation/templates/icons-svg-components.html`, agregar dentro del `<ul class="dp-icons-svg-grid">`:

   ```html
   <li>
     <button
       class="icon-card icon-card--size-md"
       type="button"
       aria-label="[nombre-del-icono]"
       data-icon-name="[nombre-del-icono]"
     >
       <i class="icon-[nombre-del-icono]" aria-hidden="true"></i>
       <small>[nombre-del-icono]</small>
     </button>
   </li>
   ```

4. **Verificar en desarrollo**
   Ejecutar:

   ```bash
   yarn dev
   ```

   y comprobar el ícono en:
   👉 [http://localhost:3500/documentation/icons-svg-components.html](http://localhost:3500/documentation/icons-svg-components.html)

5. **Agregar a Storybook** (opcional)
   Si es un ícono que forma parte de un componente, crear/actualizar su historia en `/stories`.

---
