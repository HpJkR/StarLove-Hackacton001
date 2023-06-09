import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'

import './App.scss'

import Cards from "./components/Cards";
import HomePage from "./components/HomePage.jsx";




 const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrevious = () => {
   setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? filteredCharacters.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === filteredCharacters.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <>
<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/Cards" element={<Cards  characters={characters}
        setFilteredCharacters={setFilteredCharacters}
        peoples={filteredCharacters[currentIndex]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}/>} 
       />
</Routes>
      

        
    </>
  );
};

export default App;
