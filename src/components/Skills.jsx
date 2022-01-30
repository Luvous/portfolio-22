import React, { useState } from 'react';
import SkillCard from './SkillCard';
import $ from 'jquery';

function Skills() {
    const WebSkills = [
        {
            title: 'JAVASCRIPT',
            description: 'Programming language that I use to build great websites'
        },
        {
            title: 'HTML/CSS',
            description: 'One for building the structure of a website, and the other to make it look awesome'
        },
        {
            title: 'REACT.JS',
            description: 'Javascript library to make a more reactive website'
        },
        {
            title: 'NODE.JS',
            description: 'A technology to write a server app and build the backbone of a webiste'
        },
        {
            title: 'EXPRESS',
            description: 'A framework for writing a backend in Node.js and make APIs faster'
        },
        {
            title: 'MONGODB',
            description: 'I use it to build a database, with the help of mongoose and deploy it using Atlas'
        },
        {
            title: 'JQUERY',
            description: 'Javascript library that helps with DOM manipulation, I use it mainly for animation'
        },
        {
            title: 'HEROKU',
            description: 'Hosting tool to deploy webapps faster with great performance'
        },
        {
            title: 'GIT',
            description: 'Helps with version control, I use it to keep track of my projects'
        }
    ];

    const DesignSkills = [
        {
            title: 'FIGMA',
            description: 'Software that I use to design my projects and share concepts'
        },
        {
            title: 'PHOTOSHOP',
            description: 'I use it to edit pictures for my projects'
        },
        {
            title: 'AFTER EFFECTS',
            description: 'Here I create motion graphics and animations that I can export with Lottie'
        },
        {
            title: 'AUDITION',
            description: 'Software that helps with audio manipulation and easily create sound effects'
        },
        {
            title: 'ILLUSTRATOR',
            description: 'I build all my graphic design tasks with this, I also build icons or other graphics that I need'
        },
        {
            title: 'FL STUDIO',
            description: 'Here I make music for ads or videos contained in websites'
        },
        {
            title: 'UNITY 3D',
            description: "I use it to make AR apps easily, I'm also learning game development"
        },
        {
            title: 'CINEMA 4D',
            description: '3D Software to make animations or particles, also build 3D models fast'
        },
        {
            title: 'BLENDER',
            description: 'Like Cinema 4D, but it has different tools, and open-source'
        }
    ];

    const [showCards, changeCards] = useState(true);



    function changeIt(){
        if (!$('.skill-card').is(':animated')){
            $('.skills-button').animate({opacity:0},500);
            $(".skill-card").each(function(i) {
                $(this).delay(40*i).animate({opacity:0},500);
            });
            setTimeout(()=>{
                $(".skill-card").each(function(i) {
                    $(this).delay(40*i).animate({opacity:1},500);
                });
                changeCards(!showCards)
                $('.skills-button').animate({opacity:1},200);
            },700)
        }
        
    }

    return (
        <div className='container align-center'>
            <div className='row w-80 justify-end'>
            <button className={!showCards ? 'web-card skills-button' : 'design-card skills-button' } onClick={() => changeIt()}> {showCards ? <p>DESIGN</p> : <p>WEBDEV</p>} </button>
            </div>
            <div className='grid space-between'>
                <SkillCard Cards={showCards ? WebSkills : DesignSkills } Class={showCards ? 'web-card' : 'design-card' }/>
            </div>
        </div>
    )
}

export default Skills
