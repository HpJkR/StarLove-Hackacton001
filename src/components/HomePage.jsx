import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setButtonVisible(true);
    }, 5000);

    const windowHeight = window.innerHeight;
    const buttonPosition = windowHeight / 2;

    setButtonVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > buttonPosition) {
        setButtonVisible(false);
      } else {
        setButtonVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section>
        <div id="logo">
          <img src="src/assets/img/logo_rose.png" alt="logo" />
        </div>
        <div className="body">
          <div className="star star1"></div>
          <div className="star star2"></div>
          <div className="star star3"></div>
          <div className="star star4"></div>
          <div className="star star5"></div>
          <div className="star star6"></div>
          <div className="star star7"></div>
          <div className="star star8"></div>
          <div className="wrapper">
            <div className="scroll-text">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h1>Where to find love in space ?</h1>
              <br></br>

              <p>
                In a distant galaxy, love spreads across the stars thanks to
                "StarLove," the revolutionary dating application that allows you
                to find your soulmate among the entire universe. Dive into a
                cosmic adventure where interstellar encounters become a reality.
              </p>
              <br></br>
              <p>
                Don't let love be a distant galaxy. Download StarLove today and
                let the Force guide you to your soulmate.
              </p>
              <div className="sabre">
                <img src="src/assets/img/sabre_pink.png" />
              </div>
            </div>
            <div className={`divButton ${buttonVisible ? "show" : ""}`}>
            <Link to="/cards" style={{ textDecoration: "none" }}>
                <button
                  className="find"
                  onClick={() => console.log("Button clicked!")}>FIND</button>
              </Link>            
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
