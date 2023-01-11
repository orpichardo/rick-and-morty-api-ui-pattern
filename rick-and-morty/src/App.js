import { useEffect, useState } from 'react'
import Nav from './Nav.jsx';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})
  let [modalToggle, setModalToggle] = useState(false)

  useEffect(() => {
    apiCall()
  }, [])

  function apiCall() {
    fetch(" https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }

  function display() {
    setModalToggle(prev => !prev)
  }

  function handleClick(charInfo) {
    setCharacter(charInfo)
    display()
  }

  return (
    <div className="App">
      <Nav />
      <div className="characters-list">
        {characters.map((character, index) => (
          <div className="character-container" onClick={() => handleClick(character)} key={index}>
            <img src={character.image} />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
      {modalToggle ?
        <div className="modal">
          <div className="modal-content">
            <div className="info">
                <h1>{character.name}</h1>
            <p>Status - {character.status}</p>
            <p>Species - {character.species}</p>
            <p>Gender - {character.gender}</p>
            <p>Origin - {character.origin.name}</p>
            <p>Location - {character.location.name}</p>
              <button onClick={display}>x</button>
              </div>
        </div>
          </div>
        
        :
        null
      }
    </div>
  );
}

export default App;
