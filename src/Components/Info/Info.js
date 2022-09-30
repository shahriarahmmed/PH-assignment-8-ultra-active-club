import React from 'react';
import './Info.css'
const Info = (props) => {
    console.log(props)
    // const {name, image} = props.info;
    return (
        <div className='info'>
            
            <h2>Coach Info</h2>
            <div className='trainer-info'>
                <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="" />
                <h3>Shahriar Ahmmed</h3>
                <p>Dhaka, Bangladesh</p>
            </div>
            
            <div className='break'>
                <h3>Add Break time</h3>
                <div className='break-time-btn'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h4>Exercise time</h4>
                    <h4>0 second</h4>
                </div>
                <div className='break-time'>
                    <h4>Break Time</h4>
                    <h4>0 second</h4>
                </div>
            </div>
        </div>
    );
};

export default Info;