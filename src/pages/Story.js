import React from 'react';
import StoryView from '../assets/story.png';
import "../styles/Story.css";

function Story() {
  return (
    <div className='story'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${StoryView})`, marginTop:'100px' }}
        ></div>
      <div className='aboutBottom'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60%',
        }}>
        <h1> Mayhem Story </h1>
      <p style={{
        lineHeight: '1.5',
      }}>
        Year 2027, the world is in turmoil. 
        Terrorist organizations and separatist groups threaten global peace.
        The International Peace Union (IPU) holds a leading position in the worldwide fight against terrorism.
        However, a covert operation known as "Operation Red Storm" is being carried out by the IPU's elite soldiers.

        Sergeant Alex Turner leads the assigned IPU team.
        Operation Red Storm aims to either seize control of five strategically located enemy bases or eliminate enemy forces altogether.
        These bases not only house the enemy's military power but also crucial information for establishing world peace.

        Alex, accompanied by the experienced sniper Shadow Eye, the fearless warrior Phantom Fury, and the weapons expert Thunder Hammer, will infiltrate the enemy bases, capture strategic points, and engage in a challenging battle to save the world from chaos.

        However, the enemy's leader, the mysterious figure General Viktor Dragunov, proves to be not only a military leader but also a cunning strategist. At every stage of Operation Red Storm, Alex and the team will face the enemy's dangerous warriors and cunning tactics.

        The team must collaborate to overcome the enemy's defense systems, acquire strategic information, and work together to establish world peace. This operation is not just a military victory but a struggle that will determine the future of the world. Operation Red Storm presents a gripping tale of action and mystery, testing the courage, strategic brilliance, and teamwork skills of the IPU team.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Story
