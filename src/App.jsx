import "./App.css";
import NavImg1 from "./assets/imagenav-removebg-preview.png"
function App() {
  return (
    <>
      <div className="contenair">
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
                  <li><a href="">Jazz</a></li>
                  <li><a href="">Rock</a></li>
                  <li><a href="">Bagasy</a></li>
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
                <img src={NavImg1}/>
              </div>
            </div>
          </div>
          <marquee behavior="schrool" direction="left">Merci pour visiter cette site</marquee>
        </footer>
      </div>
    </>
  );
}

export default App;
