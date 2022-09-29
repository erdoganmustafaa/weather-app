import React from 'react';
import Rainy from "../img/rainy.jpg";

function Background() {
  return (
    <div className='background'>
        <div className='overlay'></div>
        <img src={Rainy} className="background-img" alt="rainy"></img>
    </div>
  )
}

export default Background;