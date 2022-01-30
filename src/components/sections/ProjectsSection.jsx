import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function ProjectsSection() {
    const { scrollYProgress } = useViewportScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [100, -1000]);


    return (
        <motion.div
            className='row'
            initial="hidden"
            whileInView="visible"
            style={{
                translateX: scale
            }}>
            <h2 className='section-title'>PROJECTS</h2>
            <h2 className='section-title upside-down'>PROJECTS</h2>
            <h2 className='section-title'>PROJECTS</h2>
        </motion.div>
    )
}

export default ProjectsSection
