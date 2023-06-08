import {useState} from "react";


const Cards = ({characters}) => {
  
  return (
    <div className= "cards">
        {characters.map((charac, id) => (
            <div className="card" key={id}>
              <div className= "nameCard">
                <p>{charac.name}</p>
              </div>
              <div className= "myMage">
                <img src={charac.image} alt={charac.name} />
              </div>
         </div>
        ))}
    </div>
        
    );
}

export default Cards;