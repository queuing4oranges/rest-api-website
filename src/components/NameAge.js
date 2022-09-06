import React, { useState, useEffect } from 'react';


export default function NameAge() {
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
        const response = await fetch()
        const responseData = await response.json()
        setData(responseData)
        console.log(data)
        setData(true)
    }

    useEffect(() => {
      fetchData()
    }, [])
    




  return (
    <div>NameAge</div>
  )
}
