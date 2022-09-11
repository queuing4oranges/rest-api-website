import React from 'react'; 
import { Link } from "react-router-dom";

export default function Home() {


  return (
    <div className="home__container">
        <h1 className="home__title">How would you like to procrastinate today?</h1>
        <div className="link__cont">
        <Link className="home__link" to="/name-age"><p>Check my name.</p></Link>
        <Link className="home__link" to="/quote"><p>Give me a quote.</p></Link>
        <Link className="home__link" to="/activity"><p>Let's find an activity for me.</p></Link>
        <Link className="home__link" to="/where"><p>Where am I from.</p></Link>
        </div>
    </div>
  )
}
