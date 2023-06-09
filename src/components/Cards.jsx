import { useState } from "react";
import Filters from "./Filters";

const Cards = (props) => {
  const {
    peoples,
    handlePrevious,
    handleNext,
    characters,
    setFilteredCharacters,
  } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="global-container">
      <div className="Filter">
        <Filters
          characters={characters}
          setFilteredCharacters={setFilteredCharacters}
        />
        <img
          className="iphoneLeft"
          src="./src/assets/img/iphone.png"
          alt="iphone"
        />
      </div>

      <div className="card-container">
        <img
          className="iphoneRight"
          src="./src/assets/img/iphone.png"
          alt="iphone"
        />
        <div className="transform">
          <div className="header-icons">
            <img
              className="settings"
              src="./src/assets/img/settings.png"
              alt="settings"
            />
            <img
              className="logo-rose"
              src="./src/assets/img/logo_rose.png"
              alt="logo_rose"
            />
            <img
              className="Chat"
              src="./src/assets/img/message-rounded-dots-solid-24.png"
              alt="chat"
            />
          </div>

          <div className="img-container">
            <img
              className="character"
              src={peoples?.image}
              alt={peoples?.name}
            />
          </div>

          <div className="peopleName">
            <h2>{peoples?.name}</h2>
          </div>

          <section className="footer-icons">
            <img
              className="left-arrow"
              src="./src/assets/img/left-arrow-solid-24.png"
              alt="left-arrow"
              onClick={handlePrevious}
            />
            {/* <img className="heart" src="./src/assets/img/redHeart.png" alt="heart" /> */}
            <div
              className={isFavorite === true ? "isFavorite" : "notFavorite"}
              onClick={handleClickFavorite}
            ></div>
            <img
              className="right-arrow"
              src="./src/assets/img/right-arrow.png"
              alt="right-arrow"
              onClick={handleNext}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cards;
