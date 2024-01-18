import React from 'react'

function GunItem({ image, name, runSpeed, magazine, reloadSpeed }) {
    return (
      <div className="gunItem">
          <div style={{ backgroundImage: `url(${image})`, backgroundSize:"cover" }}></div>
          <h1 style={{
              fontSize: '1.8em',
          }}> {name} </h1>
          <p><b>Run Speed: </b> {runSpeed} </p>
          <p><b>Magazine: </b> {magazine} </p>
          <p><b>Reload Speed: </b> {reloadSpeed} </p>
      </div>
    );
}

export default GunItem;
