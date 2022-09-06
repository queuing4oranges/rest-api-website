import React, { useState, useEffect } from 'react';


export default function NameAge() {
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)
    
    const getInputValue = (event) => {
    const agename = event.target.value;
    console.log(agename)
    }  

        const url = `https://api.agify.io/?name=${agename}`

        const fetchData = async () => {

        


        const response = await fetch()
        const responseData = await response.json(url)
        setData(responseData)
        setData(true)
}

            
        // useEffect(() => {
        // fetchData()
        // }, [])
    
        // console.log(data)




  return (
    <div>
        <h2>What's your name according to your age?</h2>
        <input type="text" onChange={getInputValue} />
        <button onClick={() =>fetchData}>GO!</button>

        {data && 
            <div>

            </div>
        }



    </div>
  )
}
