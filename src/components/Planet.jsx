import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import planet_01 from '../images/planet_01.mp4';

function Planet() {
    const { scrollYProgress } = useViewportScroll();

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, -3000]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1500]);

    return (
        <motion.div
            className='planet'
            style={{
                translateX: scaleX,
                translateY: scaleY
            }}
        >
            <video
                src={planet_01}
                className='planet-video'
                type='video/mp4'
                muted
                autoPlay={true}
                controls={false}
                loop={true}
            />
        </motion.div>
    )
}

export default Planet

