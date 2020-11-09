import './App.css';
import imageInSrc from "./imageInSrc.png"
import "./style.css";

function App() {
  return (
    <div id='main'>
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className="title red">Mohamed Amine MANNAI</h1>
        <br/>
        <img src={imageInSrc} alt='imageInSrc'/>
        <br/>
        <img src="/imageInPublic.png" alt='imageInPublic'/>
      </div>
      <video width="620" height="340" controls>
        <source src="/myVideo.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
