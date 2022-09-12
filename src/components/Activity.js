import React from 'react';
import { useState } from "react";

export default function Activity() {
  const [activity, setActivity] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false)

  const fetchData = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const responseData = await response.json()
    setActivity(responseData);
    setDataLoaded(true);
  }

  console.log(activity)

  return (
    <div className="activity__container">
      <div className="activity__frame">
      <h1 className="activity__title">Bored? Here's an idea</h1>
      <button className="activity__btn" onClick={fetchData}>Ok. Show me!</button>

      {dataLoaded &&
      <div className="activity__content">
        <p className="activity__text">{activity.activity}.</p>
      </div>
      }
      </div>
    </div>
  )
}
