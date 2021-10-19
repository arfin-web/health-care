import React from 'react';
import { useHistory } from 'react-router';
import './Notfound.css';

const Notfound = () => {
    const history = useHistory();

    const handleHome = () => {
        history.push('/home');
    }

    return (
        <>
            <div className="container-fluid notfound-container mb-5">
                <div className="notfound-title">
                    <h1 className="text-info opacity-75 fw-bolder title">404</h1>
                    <button onClick={handleHome} type="button" className="btn btn-info text-white">Go to Home</button>
                </div>
            </div>
        </>
    );
};

export default Notfound;