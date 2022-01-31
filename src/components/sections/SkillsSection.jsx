import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function SkillsSection() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [200, -1500]);

    return (
        <motion.div
            className='row'
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: scale
            }}>
            <h2 className='section-title'>SKILLS</h2>
            <h2 className='section-title upside-down'>SKILLS</h2>
            <h2 className='section-title'>SKILLS</h2>
            <h2 className='section-title upside-down'>SKILLS</h2>
            <h2 className='section-title'>SKILLS</h2>
            <h2 className='section-title upside-down'>SKILLS</h2>
            <h2 className='section-title'>SKILLS</h2>
            <h2 className='section-title upside-down'>SKILLS</h2>
            <h2 className='section-title'>SKILLS</h2>
            <h2 className='section-title upside-down'>SKILLS</h2>
        </motion.div>
    )
}

export default SkillsSection
