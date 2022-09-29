import React, {useState, useEffect} from 'react';
import Activity from '../Activity/Activity';
import "./Activities.css"


const Activities = () => {
    const [activites, setActivites] = useState([]);

    useEffect( () => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setActivites(data))
    }, [])
    return (
        <div className='activites'>
            <div className="header">
                <h1>Personal Fitness Coach</h1>
            </div>
            <div>
            {
                activites.map(activity => <Activity
                key={activity.id}
                activity={activity}
                ></Activity>)
            }
            </div>
        </div>
    );
};

export default Activities;