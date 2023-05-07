import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 4
  const[isBlue,setIsBlue]= useState(false);
  const toggleColor=()=>{
    setIsBlue(!isBlue);
  };
  return (
    <div id="main">
      <p className={isBlue?'blueColor':'redColor'} >Newton School</p>
      <button id='button' onClick={toggleColor}>Change Style</button>
    </div>
  )
}


export default App;
