import React from 'react';

const Break = () => {
    return (
        <div className='mx-2 my-5'>
            <h2 className='text-muted'>Break</h2>
            <div className="bg-secondary d-flex justify-content-around p-2 rounded-2">
                <div className="bg-white rounded-circle px-2 d-inline-block "><h2>15</h2></div>
                <div className="bg-white rounded-circle px-2 d-inline-block" ><h2>30</h2></div>
                <div className="bg-white rounded-circle px-2 d-inline-block" ><h2>45</h2></div>
                <div className="bg-white rounded-circle px-2 d-inline-block" ><h2>60</h2></div>
            </div>
        </div>
    );
};

export default Break;