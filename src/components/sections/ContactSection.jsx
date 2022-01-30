import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function ContactSection() {
    const { scrollYProgress } = useViewportScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [300, -2000]);


    return (
        <motion.div
            className='row'
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: scale
            }}>
            <h2 className='section-title'>CONTACT</h2>
            <h2 className='section-title upside-down'>CONTACT</h2>
            <h2 className='section-title'>CONTACT</h2>
            <h2 className='section-title upside-down'>CONTACT</h2>
            <h2 className='section-title'>CONTACT</h2>
            <h2 className='section-title upside-down'>CONTACT</h2>
            <h2 className='section-title'>CONTACT</h2>
        </motion.div>
    )
}

export default ContactSection
