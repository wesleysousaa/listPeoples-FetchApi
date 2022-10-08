import './App.css';
import { useState, useEffect } from 'react'
const url = "http://localhost:3000/peoples"

function App() {

  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    async function fetchPessoas() {
      const res = await fetch(url)
      const data = await res.clone().json()

      setPessoas(data)
    }
  }, [])
  return (
    <div className="App">
        <ul>
          {pessoas.map((p, k) => (
            <li key={k}>{p.nome} - {p.idade} anos. e é {p.sexo}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
