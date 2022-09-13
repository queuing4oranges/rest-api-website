import React from 'react';
import { useState } from "react";
import Navbar from './Navbar';

export default function MaleFemale() {
  const [data, setData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false)
  const [firstname, setFirstname] = useState("")
  
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.value;
    console.log(name)
    var letters = /^[A-Za-z]+$/;
    if(name.match(letters)){
      setFirstname(name)
    }else{
      console.log("please provide only letters")
    }
    
  }

  const handleClick = async () => {
    const response = await fetch(`https://api.genderize.io/?name=${firstname}`);
    const responseData = await response.json();
    setData(responseData);
    setDataLoaded(true);
    
  }

  console.log(data)

  const probable = (data.probability*100)

  const handleKey = (e) => {
    if(e.key==="Enter") {
      handleClick();
      setDataLoaded(true)
    }
  }

  return (
    <div onKeyDown={handleKey}className="female__container">
      <Navbar />
      <h2 className="female__title">Male or female name?</h2>
      <div className="female__search">
      <input 
      className="female__input" 
      type="search" 
      onChange={handleChange} 
      maxLength="15"/>
      <button className="female__btn" onClick={handleClick}>Check</button>
      </div>

    {dataLoaded &&
    <div className="female__content">
      <p className="female__text">This name is traditionally {data.gender} with a probability of {probable} %.</p>
    </div>
    }

    </div>
  )
}
