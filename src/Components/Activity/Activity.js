import React from 'react';


const Activity = (props) => {
    const { picture, name, text, age, time}=props.activity;
    
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{text.slice(0,100)}...</p>
                    <b>Age: {age}</b><br/>
                    <b>Activity time: {time}</b>
                </div>
                <button onClick={() => props.addToList(time)} className='btn btn-primary w-100' >Add to List</button>
            </div>
        </div>
    );
};

export default Activity;