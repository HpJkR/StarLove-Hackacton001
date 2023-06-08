import { useState, useEffect } from "react";
import './App.scss'
import Filters from './components/Filters'
import Cards from './components/Cards002'

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => 
        {   
            setCharacters(res);
            setFilteredCharacters(res);
        });
}, []);
  

  return (
    <>
     <div>
      <Filters characters={characters} setFilteredCharacters={setFilteredCharacters}/>
      <Cards characters={filteredCharacters}/>
      </div>
    </>
  )
}

export default App
