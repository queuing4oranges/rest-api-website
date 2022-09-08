import React, { useState, useEffect } from 'react';


export default function NameAge() {
    const [ageName, setAgeName] = useState('')
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)
    
    const getInputValue = (event) => {
    const name = event.target.value;
    setAgeName(name)
    }  
    console.log(ageName)

    const url = `https://api.agify.io/?name=${ageName}`
    console.log(url)

    const fetchData = async () => {
        const response = await fetch(url)
        const responseData = await response.json()
        setData(responseData)
        setDataLoaded(true)
        console.log("this is your:" + data)
    }
    
    console.log(data)

    useEffect(() =>{
      fetchData()
    },[])
    
  return (
    <div>
        <h2>What's your name according to your age?</h2>
        <input type="text" onChange={getInputValue} />
        <button onClick={fetchData}>GO!</button>

        {data && 
            <div>
              {data.name}
              {data.age}
            </div>
        }



    </div>
  )
}

/**
 * https://www.boredapi.com/api/activity
 * https://api.genderize.io/?name=
 * https://api.nationalize.io/?name=katja
 */