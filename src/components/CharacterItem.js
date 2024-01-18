import React from 'react'

function CharacterItem({ image, name, price }) {
  return (
    <div className="characterItem">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> {price} </p>
    </div>
  );
}

export default CharacterItem;
