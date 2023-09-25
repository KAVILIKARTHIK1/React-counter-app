import "./App.css";
import { useState } from "react";

const App = () => {
  const handleChange = (e) => {
    const customeNumber =parseInt(e.target.value, 10);
    if(customeNumber){
      setCustomeNumber(customeNumber)

    }
  }

const [counter, setCounter] = useState(0);
const [customeNumber, setCustomeNumber] = useState(1)
  return(
    <>
<div className="container">
<h1 className="counter">{counter}</h1> <br />
<div className="btns">
<button className="btn" onClick={() => setCounter(counter + customeNumber)}>increment</button>
<button className="btn" onClick={() => setCounter(counter - customeNumber)}>decrement</button>
<button className="btn" onClick={() => setCounter(0)}>reset</button>
</div>
<br />
<input className="input" type="number" onChange={(e) => handleChange(e)} placeholder="Enter number"/>
</div>
    </>
  ) 
}


export default App;