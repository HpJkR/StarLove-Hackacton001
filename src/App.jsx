import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [peoples, setPeoples] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setPeoples(data);
      });
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? peoples.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === peoples.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <>
      <Cards
        peoples={peoples[currentIndex]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
};

export default App;
