const Cards = ({peoples}) => {
  return (
    <div className="global-container">

      <div className="Filter">
        <img className="iphone" src="./src/assets/img/iphone.png"></img>
      </div>
      {peoples.map((people, index) => (
      <div className="card-container" key={people.id}>
        
          <img className="iphone" src="./src/assets/img/iphone.png"></img>
          <div className="transform">

          <img className="settings"></img>
          <img className="logo-rose" src="./src/assets/img/logo_rose.png"></img>
          <img className="Chat"></img>
         
         
         <div className="img-container">
          <img className="character" src={people.image} alt={people.name}/>
         </div>

          <div className="peopleName">
            <h2>{people.name}</h2>
          </div>
        
        
      <section className="footer-icons">
  
        <img className="left-arrow" src=""></img>
        <img className="heart" src=""></img>
      </section>
          </div>
      </div>
      ))}
      </div>
)}

export default Cards;
