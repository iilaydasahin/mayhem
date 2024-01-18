import React from 'react';
import { CharacterList } from '../helpers/CharacterList';
import CharacterItem from '../components/CharacterItem';
import { GunList } from '../helpers/GunList';
import GunItem from '../components/GunItem';
import '../styles/Features.css';

function Features() {
  return (
    <div className='features'>
      <h1 className='featuresTitle'>Characters</h1>
      <div className='characterList'>
        {CharacterList.map((characterItem, key) => {
          return (
            <CharacterItem
            key={key}
              image={characterItem.image}
              name={characterItem.name}
              price={characterItem.price}
            />
          );
        }
      )}</div>
      <h1 className='featuresTitle'>Guns</h1>
      <div className='gunList'>
        {GunList.map((gunItem, key) => {
          return (
            <GunItem
            key={key}
              image={gunItem.image}
              name={gunItem.name}
              runSpeed={gunItem.runSpeed}
              magazine={gunItem.magazine}
              reloadSpeed={gunItem.reloadSpeed}
            />
          );
        }
      )}</div>
    </div>
  )
}

export default Features
