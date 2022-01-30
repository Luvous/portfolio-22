import React from 'react'

function SkillCard(props) {
    let cardsType = props.Cards;

    return cardsType.map((card,i)=>{
        return (
            <div tabIndex='0' key={i} className={props.Class + ' skill-card'}>
                <h2 tabIndex='1' className='skill-title'>{card.title}</h2>
                <p tabIndex='1' className='skill-description'>{card.description}</p>
            </div>
        )
    })
}

export default SkillCard
