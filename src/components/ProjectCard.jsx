import React from 'react';
import StackBadge from './StackBadge';

function ProjectCard(props) {
    return (
        <div className='card space-between'>
            <img src={props.Mockup} alt='' />

            <div className='content'>
                <h2 className='project-title'>{props.ProjectTitle}</h2>
                <p className='project-p'>{props.ProjectDescription}</p>
                <div className='row space-between m-1'>
                    <a className='redirect top-left-border' target='_blank' rel="noreferrer" href={props.GitLink}><h3>Repository</h3></a>
                    <a className='redirect top-right-border' target='_blank' rel="noreferrer" href={props.WebsiteLink}><h3>Website</h3></a>
                </div>
                <div className='row space-evenly mobile-nowrap'>
                    <StackBadge TechName={props.TechStack} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
