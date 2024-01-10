import { useState } from "react";
import "./App.css";
import nutLogo from "./assets/20180320_165555962_iOS.png";
import images from "./images.jsx";
import ImageSlider from "./ImageSlider";
 
function App() {
  const [count, setCount] = useState(0);
  
    return (
    <>
      <div>
        <img src={nutLogo} className="logo" alt=" logo" />
      </div>

      <div className="card">
        <p>
          <h1>Cuttin Corner</h1>
        </p>
        <div className="App">
            <ImageSlider images={images} />
        </div>
 
      </div>
      
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <footer>
        <h5>Developed by Rodney "Rodzilla" Nutall </h5>
      </footer>
      </>)
}
      ;

    
  

export default App;
