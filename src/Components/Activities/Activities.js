import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Break from '../Break/Break';
import Header from '../Header/Header';
import User from '../User/User';


const Activities = () => {
    const [activities, setActivities] = useState([]);
    const[totalTime, setTotalTime]=useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    const addToList = (time) => {
        setTotalTime(totalTime+ time);
    }
    return (
        <div className='row'>
            <div className="col-md-9 col-sm-12 bg-light">
                <div className="m-5">
                    <Header></Header>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                addToList={addToList}
                            ></Activity>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="my-2">
                    <User></User>
                    <Break></Break>
                    <div className='mx-2 my-5'>
                        <h2 className=''>Activity Details</h2>
                        <div className="d-flex justify-content-between my-2 p-3 bg-secondary rounded-4 text-light">
                            <h4>Activity Time</h4>
                            <h5>{totalTime} Minutes</h5>
                        </div>
                        <div className="d-flex justify-content-between my-2 p-3 bg-secondary rounded-4 text-light">
                            <h4>Break</h4>
                            <h5>0 Minutes</h5>
                        </div>
                        <button className='btn btn-primary my-2 p-3 rounded-4 w-100 fs-3' >Activity Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Activities };