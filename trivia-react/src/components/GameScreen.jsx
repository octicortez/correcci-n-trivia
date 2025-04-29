import React, { useEffect, useState } from 'react';

export default function GameScreen({ preguntas, preguntaActual, setPreguntaActual, puntaje, setPuntaje, onGameEnd }) {
  const [opciones, setOpciones] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const pregunta = preguntas[preguntaActual];

  useEffect(() => {
    if (!pregunta) return;

    const mezcladas = [...pregunta.incorrect_answers];
    const indiceCorrecta = Math.floor(Math.random() * 4);
    mezcladas.splice(indiceCorrecta, 0, pregunta.correct_answer);
    setOpciones(mezcladas);
    setSeleccionado(null);
  }, [pregunta]);

  const manejarRespuesta = (opcion) => {
    if (seleccionado) return;

    const esCorrecta = opcion === pregunta.correct_answer;
    if (esCorrecta) setPuntaje(puntaje + 10);
    setSeleccionado(opcion);

    setTimeout(() => {
      if (preguntaActual + 1 >= preguntas.length) {
        onGameEnd();
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1500);
  };

  const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div>
      <h2>{decodeHTML(pregunta.question)}</h2>
      <div id="opciones">
        {opciones.map((opcion, i) => {
          const clase = seleccionado
            ? opcion === pregunta.correct_answer
              ? 'correcta'
              : opcion === seleccionado
              ? 'incorrecta'
              : ''
            : '';
          return (
            <button
              key={i}
              className={`respuesta ${clase}`}
              onClick={() => manejarRespuesta(opcion)}
              disabled={!!seleccionado}
            >
              {decodeHTML(opcion)}
            </button>
          );
        })}
      </div>
      <h4>Puntaje: {puntaje} / {preguntas.length * 10}</h4>
    </div>
  );
}