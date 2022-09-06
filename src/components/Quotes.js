// import React, { useState, useEffect } from 'react';


// export default function Quotes() {
//     const [data, setData] = useState(null)
//     const [dataLoaded, setDataLoaded] = useState(false);

    
//     const fetchData = async () => {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '87ef4bdfadmsha19117f7e173882p147106jsn5879fee115bd',
//                 'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
// 	        }}
            
//         const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
//         const responseData = await response.json()
//         setData(responseData)
//         setDataLoaded(true)
//     }

//     useEffect(() =>{
//         fetchData()
//     }, [])

//     console.log(data)

//   return (
//     <div><h2>Quote of the Day</h2>


//     {data && 
//         <div>
//         <p>{data.content}</p>
//         <p>"{data.originator.name}"</p>
//         </div>
//     }

//     </div>
    
//   )
// }
