import './App.css';
import { useState, useEffect } from 'react'
const url = "http://localhost:3000/pessoas"

function App() {

  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    async function fetchPessoas() {
      const res = await fetch(url)
      const data = await res.clone().json()

      setPessoas(data)
    }
    fetchPessoas()
  }, [])
  
  return (
    <div className="App">
      <ul>
        {pessoas.map((p, k) => (
          <li key={k}>{p.nome} - {p.idade} anos - {p.sexo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
