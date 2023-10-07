import React,{useState} from 'react'
import './App.css';

function App() {
const [toggle,setToggle]= useState(false)


  return (
    <div className="App">
      <button type="submit" onClick={()=>{setToggle(!toggle)}}>click </button>
{toggle && <p>this is text</p>}
    </div>
  );
}

export default App;
