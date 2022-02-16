import React from 'react'
import sunVideo from '../images/sun_ae.mp4';

function SunVideo() {
    return (
        <div>
            <video
                src={sunVideo}
                type='video/mp4'
                id='sunVideo'
                className='video'
                loop
                muted
                autoPlay={true}
                controls={false}
            />
        </div>
    )
}

export default SunVideo;