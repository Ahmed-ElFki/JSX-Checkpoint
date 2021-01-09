import './App.css';
import Limg from "./imageInSrc.jpg";
import Pimg from "./imageInPublic.jpg";
import video from "./cat vs nemo.mp4";

function App() {
  return (
    <div className="container">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className={"title-red"}>Ahmed</h1>
        <br/>
        <img src={Limg} alt="img from src"/>
        <br/>
        <img src={Pimg} alt="img from public"/>
      </div>

      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
