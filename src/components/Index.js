import { useState } from "react";
import "./Css.css";
import Click from "./Click";
import Backdrop from "./Backdrop";
function Info (){
 const [fondo, setfondo] = useState()

  function pulsador (){
    setfondo(true);
  }
  function pulsadorfondo(){
    setfondo(false);
  }
    return(
     <div className="card">
       
       <div className="actions">
        <button className="btn" onClick={pulsador}>Play</button>
        </div>
       { fondo && <Click  onConfirm={pulsadorfondo} onDenied={pulsadorfondo}/>  }
       { fondo && <Backdrop onClick={pulsadorfondo}/> }
   </div>
      );
  }
  export default Info;