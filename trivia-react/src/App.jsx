import { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import FinalScreen from './components/FinalScreen';
import './index.css';

function App() {
  const [pantalla, setPantalla] = useState('inicio');
  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('easy');
  const [categorias, setCategorias] = useState([]);
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => setCategorias(data.trivia_categories));
  }, []);

  const iniciarJuego = async () => {
    const url = `https://opentdb.com/api.php?amount=5&category=${categoria}&difficulty=${dificultad}&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();
    
    setPreguntas(data.results);
    setPreguntaActual(0);
    setPuntaje(0);
    setPantalla('juego');
  };

  const finalizarJuego = () => {
    setPantalla('final');
  };

  const reiniciarJuego = async () => {
    try {
      const url = `https://opentdb.com/api.php?amount=5&category=${categoria}&difficulty=${dificultad}&type=multiple`;
      const res = await fetch(url);
      const data = await res.json();
  
      setPreguntas(data.results);
      setPreguntaActual(0);
      setPuntaje(0);
      setPantalla('juego');
    } catch (error) {
      console.error('Error al reiniciar el juego:', error);
    }
  };

  const volverAlMenu = () => {
    setCategoria('');
    setDificultad('easy');
    setPreguntas([]);
    setPreguntaActual(0);
    setPuntaje(0);
    setPantalla('inicio');
  };

  return (
    <div>
      {pantalla === 'inicio' && (
        <StartScreen
          onStart={iniciarJuego}
          categoria={categoria}
          setCategoria={setCategoria}
          dificultad={dificultad}
          setDificultad={setDificultad}
          categorias={categorias}
        />
      )}

      {pantalla === 'juego' && (
        <GameScreen
          preguntas={preguntas}
          preguntaActual={preguntaActual}
          setPreguntaActual={setPreguntaActual}
          puntaje={puntaje}
          setPuntaje={setPuntaje}
          onGameEnd={finalizarJuego}
        />
      )}

      {pantalla === 'final' && (
        <FinalScreen
          puntaje={puntaje}
          total={preguntas.length * 10}
          onReiniciar={reiniciarJuego}
          onSalir={volverAlMenu}
        />
      )}
    </div>
  );
}

export default App;
