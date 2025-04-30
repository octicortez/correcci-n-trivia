# 🧠 Juego de Trivia con React

Este proyecto es un juego de trivia desarrollado completamente en **React**. Utiliza la API de [Open Trivia DB](https://opentdb.com/) para obtener preguntas por categoría y dificultad, y presenta una interfaz moderna e interactiva al usuario.

## 🚀 ¿Qué hace esta app?

Permite que el usuario:
- Seleccione una categoría y nivel de dificultad.
- Responda 5 preguntas multiple choice.
- Vea el puntaje actualizado tras cada respuesta.
- Acceda a una pantalla final con el puntaje total.
- Decida si quiere reiniciar el juego o volver al menú de inicio.

## 🧩 Estructura del proyecto

Los componentes principales del juego están divididos en archivos React:

- `App.jsx`: Componente raíz que gestiona la navegación entre pantallas.
- `StartScreen.jsx`: Pantalla inicial con selección de categoría y dificultad.
- `GameScreen.jsx`: Pantalla de juego donde se muestran las preguntas y respuestas.
- `FinalScreen.jsx`: Pantalla de resultados finales y opciones para reiniciar o volver al menú.
- `index.css`: Estilos visuales personalizados con tipografías y colores modernos.

## 📦 Instalación y ejecución local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/octicortez/Trivia.git
   cd Trivia
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la app**
   ```bash
   npm start
   ```

La app se abrirá en `http://localhost:3000`.

## 🎮 Instrucciones de uso

1. **Pantalla de inicio**
   - Elegí una categoría y dificultad.
   - Presioná el botón **¡Jugar!**

2. **Pantalla de juego**
   - Se cargan 5 preguntas según tu selección.
   - Elegí una respuesta por pregunta. Se mostrará en verde si es correcta, o rojo si es incorrecta.
   - El puntaje se actualiza automáticamente.

3. **Pantalla final**
   - Se muestra tu puntaje final.
   - Podés volver a empezar o regresar al menú.

## 🛠️ Tecnologías utilizadas

- **React** con componentes funcionales.
- **JavaScript** para la lógica del juego.
- **CSS personalizado** con fondo temático y diseño responsivo.
- **API externa**: [Open Trivia DB](https://opentdb.com/)

## 🌱 Posibles mejoras

- Guardar el historial de puntajes con LocalStorage.
- Implementar un sistema de ranking entre jugadores.
- Agregar sonidos y efectos visuales.
- Convertirlo en app mobile con React Native.

---

💡 Proyecto realizado por [@octicortez](https://github.com/octicortez)
