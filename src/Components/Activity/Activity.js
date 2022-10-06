import React from 'react';
import "./Activity.css"

const Activity = (props) => {
    // const {activity, handleAddBtn} = props;
    const {name, img, time} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h3><span>Exercise: {name}</span></h3>
            <p><span>Time Required: {time} min</span></p>
            <button className='add-btn' onClick={ () => props.handleAddBtn(props.activity)}>Add to list</button>
        </div>
    );
};

export default Activity;