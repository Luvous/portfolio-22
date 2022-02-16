import React from 'react';
import ProjectCard from './ProjectCard';
import mockup_00 from '../images/webmockup_00.png'
import mockup_01 from '../images/webmockup_01.png'

function Cards() {
    const ComicbookStack = ['Node.js', 'Express.js', 'EJS', 'jQuery', 'MongoDB']
    const NewsScrapper = ['Node.js', 'Express.js', 'React']

    return (
        <div className='container align-center h-100'>
            <ProjectCard
                ProjectTitle='Comicbook Artist Website'
                TechStack={ComicbookStack}
                Mockup={mockup_00}
                GitLink='https://github.com/Luvous/matias-portfolio'
                WebsiteLink='https://matias-varela.herokuapp.com/'
                ProjectDescription='A website that I built for a comicbook artist, Matias Varela, the website has multiple sections, included a portfolio, store, blog and contact.'
            />
            <ProjectCard
                ProjectTitle='NewsScrapper'
                TechStack={NewsScrapper}
                Mockup={mockup_01}
                GitLink='https://github.com/Luvous/NewsScrapper'
                WebsiteLink='https://newsscrapper.netlify.app/'
                ProjectDescription='Web scraper for local news website, the perfect place to start the day with the latest news from Clarin, La Nación and Infobae, more to come.'
            />
        </div>
    )
}

export default Cards;