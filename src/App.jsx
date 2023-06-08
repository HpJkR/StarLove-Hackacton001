import { useState, useEffect } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json()).then((res) => console.log(res) || setPeoples(res));
  }, []);



  return (
    <>
      <Cards peoples={peoples} />
    </>
);

    }
export default App;
