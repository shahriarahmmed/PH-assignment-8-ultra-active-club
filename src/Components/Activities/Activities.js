import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import "./Activities.css"
import '../Info/Info'


const Activities = () => {
    const [activites, setActivites] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setActivites(data))
    }, [])

    const handleAddBtn = (activity) => {
        console.log(activity.time);
        const totalTime = [...time + activity.time]
        setTime(totalTime);
    }

    return (
        <div className='activites'>
            <div className="header">
                <h1>Personal Fitness Coach</h1>
                <h3>Select your exercise</h3>
            </div>
            <div className='items'>
                {
                    activites.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddBtn={handleAddBtn}
                    ></Activity>)
                }
            </div>
            <div>
                <h2>Some React Interview Questions</h2>
                <h3>Q1: How does react work?</h3>
                <p><b>Ans:</b>ReactJS divides the UI into isolated reusable pieces of code known as components.</p>
                <h3>Q2: What are the Difference between props and state?</h3>
                <p><b>Ans:</b> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                <h3>Q3: UseState usage except data load?</h3>
                <p><b>Ans:</b> The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. </p>
            </div>
        </div>
    );
};

export default Activities;