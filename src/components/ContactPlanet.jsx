import React from 'react';
import planet_03 from '../images/planet_03.mp4';

function ContactPlanet() {
  return <div>
      <video
                src={planet_03}
                className='planet-contact'
                loop
                type='video/mp4'
                muted
                controls={false}
                autoPlay
            />
  </div>;
}

export default ContactPlanet;
