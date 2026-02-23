# 🌌 Skill Tree Portfolio - RPG Style

¡Bienvenido a mi Plano Etéreo! Este proyecto es una reimaginación de un portafolio profesional tradicional, transformado en un **Árbol de Habilidades** interactivo inspirado en los clásicos videojuegos de rol (RPG). 

En lugar de leer un currículum estático, aquí puedes explorar mi progresión, "loot" (certificados/proyectos) y estadísticas como Data Scientist de una manera completamente gamificada.

🌍 **Mira el proyecto en vivo aquí:** [Enlace a tu Vercel/Netlify]

---

## ✨ Características Principales

* **🗺️ Mapa Interactivo:** Navegación fluida con zoom, paneo y minimapa, impulsado por `React Flow`.
* **🔮 Nodos Dinámicos:** Diferentes estados visuales para las habilidades (Desbloqueado, En Progreso, Bloqueado) con efectos de neón y animaciones de pulso.
* **🎒 Inventario (Lore Modal):** Al hacer clic en un nodo, se abre un modal animado con `Framer Motion` que revela el "Lore" (descripción de la etapa), los puntos de atributo ganados y el botín descargable (PDFs, GIFs de demostración, imágenes).
* **👤 HUD de Personaje:** Un panel flotante de jugador con nivel, barra de experiencia, rango actual (Mid-Level) y foto de perfil.
* **🕸️ Radar de Atributos:** Gráfico de telaraña interactivo usando `Recharts` que muestra la distribución de mis habilidades principales (Computer Vision, Cloud, Big Data).
* **✨ Firmamento Animado:** Un fondo espacial profundo con efecto parallax (estrellas moviéndose a distintas velocidades), renderizado y optimizado puramente con CSS y sombras de GPU.

---

## 🛠️ Tecnologías Equipadas (Stack)

* **Motor Principal:** React 18 + Vite
* **Estilos y Armadura:** Tailwind CSS (v3)
* **Renderizado del Mapa:** React Flow
* **Animaciones:** Framer Motion
* **Gráficos de Atributos:** Recharts
* **Iconografía:** Lucide React + SVGs personalizados

---

## 📁 Estructura del Inventario (Assets)

El motor lee la información de progresión directamente del archivo src/data/skillTree.json. Los recursos visuales ("el loot") se organizan de forma estricta en la carpeta public/assets/:

    /public/assets/avatars/ - Tu foto de perfil principal (avatar.jpg).

    /public/assets/icons/ - Iconos en formato .svg para las insignias de los nodos de tecnología.

    /public/assets/certs/ - PDFs de certificados, actas de grado y fotos de logros (.pdf, .jpg, .png).

    /public/assets/videos/ - Demostraciones de proyectos (.gif o .mp4).
## Despliegue en producción.
El proyecto se desplego conectando el repositorio de github a vercel de manera que se puedan seguir practicas de CI/CD. el resultado se puede visualizar en https://skill-tree-portfolio-myve68e7b-spereze27s-projects.vercel.app/
