import React from 'react';
import "./Activity.css"

const Activity = (props) => {
    const {name, img, time} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h3><span>Exercise: {name}</span></h3>
            <p><span>Time Required: {time}s</span></p>
            <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default Activity;