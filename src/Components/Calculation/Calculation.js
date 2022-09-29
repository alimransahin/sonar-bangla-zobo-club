import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculation = (props) => {
    const notify = () => toast("Wow so easy!");
    let breakTime = localStorage.getItem('storageTime');
    if(!breakTime){
        breakTime=0;
    }
    return (
        <div>
            <div className='mx-2 my-5'>
                <h2 className=''>Activity Details</h2>
                <div className="d-flex justify-content-between my-2 p-3 bg-secondary rounded-4 text-light">
                    <h4>Activity Time</h4>
                    <h5>{props.totalTime} Minutes</h5>
                </div>
                <div className="d-flex justify-content-between my-2 p-3 bg-secondary rounded-4 text-light">
                    <h4>Break</h4>
                    <h5>{breakTime} Minutes</h5>
                </div>
                <button onClick={notify} className='btn btn-primary my-2 p-3 rounded-4 w-100 fs-3' >Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Calculation;