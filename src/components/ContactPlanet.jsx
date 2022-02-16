import React from 'react';
import planet_03 from '../images/planet_03.mp4';

function ContactPlanet() {
  return <div>
      <video
                src={planet_03}
                type='video/mp4'
                className='planet-contact'
                muted
                autoPlay={true}
                controls={false}
                loop={true}
            />
  </div>;
}

export default ContactPlanet;
