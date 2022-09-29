import React from 'react';
import "./Activity.css"

const Activity = (props) => {
    const {name, img, time} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h3>Exercise: {name}</h3>
            <p>Time Required: {time}</p>
            <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default Activity;