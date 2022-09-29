import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Calculation from '../Calculation/Calculation';
import FaQ from '../FaQ/FaQ';
import Header from '../Header/Header';
import User from '../User/User';


const Activities = () => {
    const [activities, setActivities] = useState([]);
    const[totalTime, setTotalTime]=useState(0);
    const[totalBreakTime, setTotalBreakTime]=useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    const addToList = (time) => {
        setTotalTime(totalTime+ time);
    }
    const breakTime=[15,30,45,60];

    const updateBreakTime=(time)=>{
        setTotalBreakTime(time);
        localStorage.setItem('storageTime', time)
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
                    <FaQ></FaQ>
                </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="my-2">
                    <User></User>
                    <div className='mx-2 my-5'>
                        <h2 className='text-muted'>Break</h2>
                        <div className="bg-secondary d-flex justify-content-around p-2 rounded-2">
                            {
                                breakTime.map(time => <button onClick={() => { updateBreakTime(time) }} type='button' className="btn btn-light btn  p-3 fs-4" >{time}</button>)
                            }
                        </div>
                    </div>
                    <Calculation totalTime={totalTime}></Calculation>
                </div>
            </div>
        </div>
    );
};

export { Activities };