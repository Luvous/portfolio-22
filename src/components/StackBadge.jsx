import React from 'react';

function StackBadge(props) {
    let arrayTech = props.TechName;

    return arrayTech.map((techname,i)=>{
        return (
            <div key={i} className='badge'>
                <p>{techname}</p>
            </div>
        )
    })
}

export default StackBadge;
