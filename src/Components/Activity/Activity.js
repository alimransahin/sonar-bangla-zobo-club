import React from 'react';


const Activity = (props) => {
    const { picture, name, text, age, time}=props.activity;
    const [disable, setDisable] = React.useState(false);
    
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
                <button onClick={() => {props.addToList(time); setDisable(true)}} className='btn btn-primary w-100' disabled={disable} >Add to List</button>
            </div>
        </div>
    );
};

export default Activity;