import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function AboutSection() {
    const { scrollYProgress } = useViewportScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [0, -500]);


    return (
        <motion.div
            className='row'
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: scale
            }}>
            <h2 className='section-title'>ABOUT</h2>
            <h2 className='section-title upside-down'>ABOUT</h2>
            <h2 className='section-title'>ABOUT</h2>
            <h2 className='section-title upside-down'>ABOUT</h2>
            <h2 className='section-title'>ABOUT</h2>
        </motion.div>
    )
}

export default AboutSection
