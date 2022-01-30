import React from 'react';

function IntroContent() {
    return (
        <div className='container'>
            <div className='row space-between'>
                <h1>TOM VARELA</h1>
                <nav className='navigation'>
                    <a href='#about'><h6>ABOUT.</h6></a>
                    <a href='#projects'><h6>PROJECTS.</h6></a>
                    <a href='#skills'><h6>SKILLS.</h6></a>
                    <a href='#contact'><h6>CONTACT.</h6></a>
                </nav>
            </div>
            <div className='row'>
                <h1 className='subtitle'>WEB DEVELOPER</h1>
            </div>
        </div>
    )
}

export default IntroContent
