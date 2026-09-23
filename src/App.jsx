import "./App.css";
import {useState} from "react";
export default function App()
{
  const[weight,setweight]=useState(0);
  const[height,setheight]=useState(0);
  const[bmi,setbmi]=useState(0);
  const[message,setmessage]=useState("");
  function relod() {
  setweight(0);
  setheight(0);
  setbmi(0);
  setmessage("");
}
  function calbmi(e) {
  e.preventDefault();

 let heightm=height/100;
 let result=weight/(heightm*heightm);
 setbmi(result.toFixed(2));
  if (result < 18.5) {
    setmessage("Underweight");
  } 
  else if (result < 25) {
    setmessage("Normal weight");
  } 
  else if (result < 30) {
    setmessage("Overweight");
  } 
  else {
    setmessage("Obesity");
  }
}
  return(
    <>
     
     <div className="container">
      <h2>BMI calculator</h2>
      <form onSubmit={calbmi}>
          <div>
            <label>weight</label>
            <input type="number" placeholder="enter weight value" value={weight} onChange={(e)=>setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height</label>
            <input type="number" placeholder="enter height value" value={height} onChange={(e)=>setheight(e.target.value)}/>
          </div>
          <button className="btn" type="submit"> Submit</button>
          <button className="btn-outline" onClick={relod} type="button">Relod</button>
          <div className="center">
            <h3>your bmi is:{bmi}</h3>
            <p>{message}</p>
          </div>
      </form>
    
     </div>
    </>
   
  )
}