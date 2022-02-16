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
                muted
                autoPlay={true}
                controls={false}
                loop={true}
            />
        </div>
    )
}

export default SunVideo;