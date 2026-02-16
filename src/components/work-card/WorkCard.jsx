import React from 'react'
import "./workCard.css"

function WorkCard({title, country, image, tagline, bg}) {
  return (
    <div className="cards" style={{background:bg}}>
      <h2>{title}</h2>
      <p>{country}</p>

      <div className="mockup">
        <img src={image} alt={title}/>
      </div>

      <div className="bottom-text">
        {tagline}
      </div>
    </div>
  );
}


export default WorkCard;

