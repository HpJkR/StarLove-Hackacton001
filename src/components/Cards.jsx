import Filters from "./Filters";

const Cards = ({localisation, name, gender, image}) => {
    
    return (
    <div className= "cards">
        
            <div className="card">
              <div className= "nameCard">
                <p>{localisation}</p>
              </div>
              <div className= "myMage">
                <img src={image} alt={name} />
              </div>
              <div className="description">
                <p>{gender}</p>
              </div>
              <div className="name">
                <p>{name}</p>
                </div>
         </div>
       
    </div>
        
    );
}

export default Cards;