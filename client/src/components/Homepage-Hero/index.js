import React from 'react';
import './style.css';
import HeroImage from '../../assets/images/lighted-lamps-are-hanging-from-ceiling-in-a-retail-5HGJWSW.jpg';

function homepageHero() {
    return(
        <div>
          <img className="hero" src={HeroImage} alt="Hero image" />
        </div>
      )
}

export default homepageHero;