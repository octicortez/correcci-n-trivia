export default function StartScreen({ onStart, categoria, setCategoria, dificultad, setDificultad, categorias }) {
    return (
      <div>
        <h1>Trivia Game</h1>
  
        <label htmlFor="categoria">Temática:</label>
        <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option value="">General</option>
          {categorias.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
  
        <label htmlFor="dificultad">Dificultad:</label>
        <select id="dificultad" value={dificultad} onChange={e => setDificultad(e.target.value)}>
          <option value="easy">Fácil</option>
          <option value="medium">Media</option>
          <option value="hard">Difícil</option>
        </select>
  
        <button onClick={onStart}>¡Jugar!</button>
      </div>
    );
  }