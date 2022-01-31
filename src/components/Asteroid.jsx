import React from 'react';
import AsteroidImage from '../images/asteroid.png';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Asteroid = () => {
    const { scrollYProgress } = useViewportScroll();

    const transY = useTransform(scrollYProgress, [0, 1], [-600, 1500]);
    const transX = useTransform(scrollYProgress, [0, 1], [-1000, 100]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: transX,
                translateY: transY,
                scale: scale,
            }}
        >
            <img alt='' className='asteroid' src={AsteroidImage} />
        </motion.div>
    )
}

export default Asteroid

