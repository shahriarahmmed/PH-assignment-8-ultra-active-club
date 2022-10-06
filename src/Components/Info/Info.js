import { useState } from 'react';
import './Info.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Info = (props) => {

    const [breckTime, setBreakTime] = useState(0);
    // const notify = () => toast('break time added!');
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
                    <button onClick={() => setBreakTime("10s")}>10s</button>
                    <button onClick={() => setBreakTime("20s")}>20s</button>
                    <button onClick={() => setBreakTime("30s")}>30s</button>
                    <button onClick={() => setBreakTime("40s")}>40s</button>
                    <button onClick={() => setBreakTime("50s")}>50s</button>
                    {/* <ToastContainer /> */}
                </div>
            </div>
            <div className='exercise-detail'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h4>Exercise time</h4>
                    <h4>{time.length} mintue</h4>
                </div>
                <div className='break-time'>
                    <h4>Break Time</h4>
                    <h4>{breckTime} second</h4>
                </div>
                <button>Activity complete</button>
            </div>
        </div>
    );
};

export default Info;