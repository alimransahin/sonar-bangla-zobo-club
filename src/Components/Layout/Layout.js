import React from 'react';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div>
            <div className="col-md-9 col-sm-12 container my-5">
                <Header></Header>
            </div>
            <div className="col-md-3 col-sm-12"></div>
        </div>
    );
};

export default Layout;