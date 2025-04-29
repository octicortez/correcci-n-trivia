export default function FinalScreen({ puntaje, total, onReiniciar, onSalir }) {
    return (
      <div>
        <h2>¡Trivia Finalizada!</h2>
        <h4>Tu puntaje final es: {puntaje} / {total}</h4>
        <button onClick={onReiniciar}>Reiniciar</button>
        <button onClick={onSalir}>Volver al menú</button>
      </div>
    );
  }