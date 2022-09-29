import React from 'react';

const User = () => {
    return (
        <div className='container border'>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src='https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png' className='img-fluid'/>  
                </div>
                <div className="col-md-8 ">
                    <h3>Md Imran</h3>
                    <p className='text-muted'><i class="fa-solid fa-location-dot"></i> Narayanganj, Dhaka</p>
                </div>
            </div>
            <div className="row">
                <div className="col"><h3>65<span className='text-muted fs-5'>KG</span></h3></div>
                <div className="col"><h3>6.5<span className='text-muted fs-5'>Feet</span></h3></div>
                <div className="col"><h3>24<span className='text-muted fs-5'>Years</span></h3></div>
            </div>
        </div>
    );
};

export default User;