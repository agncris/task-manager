# Task Manager

Task Manager es una aplicación React diseñada para gestionar tareas de manera eficiente. Permite a los usuarios agregar, eliminar y visualizar tareas en una interfaz moderna y fácil de usar.

## Características Principales

### Gestión de Tareas:

- Agregar nuevas tareas con validación para evitar entradas vacías.
- Eliminar tareas de la lista con un solo clic.
- Visualización de tareas en una lista interactiva.

### Diseño Moderno:

- Interfaz centrada y responsiva.
- Estilos personalizados con soporte para hover y transiciones suaves.

## Estructura del Proyecto

Task-Manager/
├── public/ # Archivos públicos (favicon, index.html si no está en src)
├── src/ # Código fuente
│ ├── components/ # Componentes reutilizables
│ │ ├── TaskForm.jsx # Formulario para agregar tareas
│ │ └── TaskList.jsx # Lista de tareas
│ ├── styles/ # Estilos globales (opcional)
│ ├── App.jsx # Componente principal de la app
│ ├── main.jsx # Punto de entrada de React con ReactDOM
├── .gitignore # Archivos y carpetas ignoradas por Git
├── package.json # Dependencias y scripts del proyecto
├── vite.config.js # Configuración de Vite
├── README.md # Documentación del proyecto

## Cómo Ejecutar el Proyecto

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- Node.js (v16 o superior).
- npm o yarn.

### Pasos para Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone git@github.com:agncris/task-manager.git
   cd task-manager

   ```

2. **Instalar dependencias**:
   npm install

3. **Ejecutar el servidor de desarrollo:**:
   npm run dev

La aplicación estará disponible en http://localhost:5173.

### 📝 Cómo Funciona

➕ Agregar Tareas
Escribe una tarea en el formulario.

Haz clic en "Agregar".

Si el campo está vacío, se mostrará un mensaje de error.

🗑️ Eliminar Tareas
Haz clic en el botón "Eliminar" junto a una tarea para quitarla de la lista.

🎨 Diseño Interactivo
Los elementos de la lista tienen un efecto hover para mejorar la experiencia del usuario.

🛠️ Tecnologías Utilizadas
React: Librería para construir interfaces de usuario.

Vite: Herramienta para desarrollo rápido.

Bootstrap: Framework CSS para estilos responsivos.

### 📝 Notas

Este proyecto es una demostración básica de gestión de tareas.

Puede ser extendido para incluir funcionalidades como persistencia de datos o autenticación.

### 💬 Soporte

Si tienes preguntas o encuentras algún problema, por favor abre un issue en este repositorio.

### ✍️ Autor

Cristian
https://github.com/agncris
