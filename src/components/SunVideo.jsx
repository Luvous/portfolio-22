import React from 'react'
import sunVideo from '../images/sun_ae.mp4';

function SunVideo() {
    return (
        <div>
            <video
                id='sunVideo'
                src={sunVideo}
                type='video/mp4'
                loop
                controls={false}
                muted
                autoPlay
                className='video'
            />
        </div>
    )
}

export default SunVideo;