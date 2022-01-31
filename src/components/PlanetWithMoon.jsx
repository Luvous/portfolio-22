import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import planet_02 from '../images/planet_02.mp4';
import moon from '../images/moon_00.png';

function PlanetWithMoon() {

    const { scrollYProgress } = useViewportScroll();

    const scaleXMoon = useTransform(scrollYProgress, [0, 1], [200, -1900]);
    const scaleX = useTransform(scrollYProgress, [0, 1], [50, -700]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [-10, 150]);

    return <div >
        <motion.div className='moon-planet'
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: scaleXMoon,
                translateY: scaleY
            }}>
            <img
                src={moon}
            />
        </motion.div>
        <motion.div
            className="planet-about"
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: scaleX
            }}>
            <video
                src={planet_02}
                loop
                type='video/mp4'
                muted
                controls={false}
                autoPlay
            />
        </motion.div>
    </div>;
}

export default PlanetWithMoon;
