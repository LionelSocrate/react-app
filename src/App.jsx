import "./App.css";
import Guitare1 from "./assets/guitare1.webp";
import Guitare2 from "./assets/guitare2.webp";
import Guitare3 from "./assets/guitare3.jpg";
import Guitare4 from "./assets/guitare4.jpg";
import Fleche from "./assets/fleche.png";

function App() {
  let img = document.getElementById('img');
  console.log(img);
  const slideLeft = ()=>{
    img.style.transform= 'translateX(-350px)';
  }
  return (
    <>
      <div className="container">
        <div className="slides-container">
          <img src={Fleche} onClick={()=>slideLeft()} alt="" />
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
      </div>
    </>
  );
}

export default App;
