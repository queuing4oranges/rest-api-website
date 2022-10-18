import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';



export default function NameAge() {

    const [dataLoaded, setDataLoaded] = useState(false)
    const [ageName, setAgeName] = useState('')
    const [data, setData] = useState('')

    const getInputValue = (event) => {
    event.preventDefault();
    const name = event.target.value;
    const firstname = name[0].toUpperCase()+name.substring(1);
    setAgeName(firstname)
    
    }  
      
    const fetchData = async () => {
        const response = await fetch(`https://api.agify.io/?name=${ageName}`)
        const responseData = await response.json()
        setData(responseData) 
        setDataLoaded(true)
     }

      const handleKey = (e) => {
      if (e.key === 'Enter'){
        fetchData()
        setDataLoaded(true)
    }
  }
    const resetInput = () => {
      const el = document.getElementById("input__field");
      el.value="";
      setDataLoaded(false)
    }




  return (
    <div className="name__container" onKeyDown={handleKey} >
      <Navbar />
      <div className="title__container">
        <h2 className="name__title">What's your name? </h2>
        <div className="input__cont">
          <input 
          className="input__field" 
          id="input__field" 
          type="search" 
          onChange={getInputValue}
          maxLength="15"/>
        </div>
          
          <div className="btn__cont">
            <button className="fetch__btn"onClick={fetchData} >GO!</button>
            <button className="again__btn" onClick={resetInput}>Clear</button>
          </div>
          
      </div>

      <div className="element__container">
        {dataLoaded &&
        
            <div>
              <p className="name__text">Hi {data.name}, </p>
              <p className="age__text">According to statistics, you are <strong>{data.age}</strong> years old.</p>
              <p className="count__text">This name has been counted <strong>{data.count}</strong> times so far.</p>
            </div> 
         
        } </div> 
      


    </div>
  )
}

/**
 * https://api.genderize.io/?name=
 * https://api.nationalize.io/?name=katja
 */