import { useState, useEffect } from "react";

function Cards(props) {
  const { peoples, handlePrevious, handleNext } = props;

  const [isFavorite, setIsFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

  const isCardFavorite = isFavorite.includes(peoples?.name);

  const handleClickFavorite = () => {
    setIsFavorite((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(peoples?.name)
        ? prevFavorites.filter((name) => name !== peoples?.name)
        : [...prevFavorites, peoples?.name];

      return updatedFavorites;
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(isFavorite));
  }, [isFavorite]);

  return (
  <section>
    
      <div className="global-container">

        <div className="Filter">
          <img
            className="iphone"
            src="./src/assets/img/iphone.png"
            alt="iphone" />
        </div>

        <div className="card-container">
          <img
            className="iphone"
            src="./src/assets/img/iphone.png"
            alt="iphone" />
          <div className="transform">
            <div className="header-icons">
              <img
                className="settings"
                src="./src/assets/img/settings.png"
                alt="settings" />
              <img
                className="logo-rose"
                src="./src/assets/img/logo_rose.png"
                alt="logo_rose" />
              <img
                className="Chat"
                src="./src/assets/img/message-rounded-dots-solid-24.png"
                alt="chat" />
            </div>

            <div className="img-container">
              <img
                className="character"
                src={peoples?.image}
                alt={peoples?.name} />
            </div>

            <div className="peopleName">
              <h2>{peoples?.name}</h2>
            </div>

            <section className="footer-icons">
              <img
                className="left-arrow"
                src="./src/assets/img/left-arrow.png"
                alt="left-arrow"
                onClick={handlePrevious} />
              <div
                className={isCardFavorite ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
              ></div>
              <img
                className="right-arrow"
                src="./src/assets/img/right-arrow.png"
                alt="right-arrow"
                onClick={handleNext} />
            </section>
          </div>
        </div>
      </div>
    </section>


  );
}

export default Cards;
