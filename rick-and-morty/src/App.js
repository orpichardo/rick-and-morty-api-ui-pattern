import { useEffect, useState } from 'react'
import Nav from './Nav.jsx';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    apiCall()
  }, [])

  function apiCall() {
    fetch(" https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }

  return (
    <div className="App">
      <Nav />
      {characters.map((character) => (
        <div>
          <img src = {character.image} />
          <h3>{character.name}</h3>
          <p>Status - {character.status}</p>
          <p>Species - {character.species}</p>
          <p>Gender - {character.gender}</p>
          <p>Origin - {character.origin.name}</p>
          <p>Location - {character.location.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
