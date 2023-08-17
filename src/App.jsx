import React from "react";
import "./App.css";
import Electro from "./assets/electronic5.jpg";
import Guitare1 from "./assets/guitare1.webp";
import Guitare2 from "./assets/guitare2.webp";
import Guitare3 from "./assets/guitare3.jpg";
import Guitare4 from "./assets/guitare4.jpg";
import Fleche from "./assets/fleche.png";

import NavImg1 from "./assets/imagenav-removebg-preview.png";
function App() {
  let img = document.getElementById("img");
  console.log(img);
  const slideLeft = () => {
    img.style.transform = "translateX(-350px)";
  };
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <p>Guitar</p>
          </div>
          <div className="lien">
            <a href="#" className="home">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <div className="card">
          <div className="card1">
            <h1>Type of model</h1>
            <div className="sary1">
              <img src={Electro} alt="" />
            </div>
            <div className="btn">
              <button>Buy</button>
            </div>
          </div>
          <div className="card1">
            <h1>Type of model</h1>
            <div className="sary1">
              <img src={Electro} alt="" />
            </div>
            <div className="btn">
              <button>Buy</button>
            </div>
          </div>
          <div className="card1">
            <h1>Type of model</h1>
            <div className="sary1">
              <img src={Electro} alt="" />
            </div>
            <div className="btn">
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="slides-container">
          <img src={Fleche} onClick={() => slideLeft()} alt="" />
          <div className="slides">
            <div className="img" id="img">
              <div className="">
                <img src={Guitare1} alt="guitare1" />
              </div>
              <div>
                <img src={Guitare2} alt="guitare2" />
              </div>
              <div>
                <img src={Guitare3} alt="guitare3" />
              </div>
              <div>
                <img src={Guitare4} alt="guitare4" />
              </div>
            </div>
          </div>
          <img src={Fleche} alt="" />
        </div>
        <footer>
          <div className="titre_footer">
            <h2>Chason en guitare pour nous</h2>
          </div>
          <div className="groupe_footer">
            <h2>vazo guitare</h2>
          </div>
          <div className="element_footer">
            <div className="element">
              <h2>Style music</h2>
              <div className="style_music">
                <ul>
                  <li>
                    <a href="">Jazz</a>
                  </li>
                  <li>
                    <a href="">Rock</a>
                  </li>
                  <li>
                    <a href="">Bagasy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="element">
              <h2> Chateurs legende </h2>
              <div className="chanteurs_legende">
                <div>Ambondrona</div>
                <div>Mirado</div>
                <div>Feo gasy</div>
              </div>
            </div>
            <div className="element">
              <h2>Navigateur</h2>
              <div className="navigateur">
                <img src={NavImg1} />
              </div>
            </div>
          </div>

          <marquee>
            Merci pour visiter cette site
          </marquee>
        </footer>
      </div>
    </>
  );
}

export default App;
