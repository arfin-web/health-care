import React from 'react';
import { useHistory } from 'react-router';
import Bounce from 'react-reveal/Bounce';

const Offer = () => {
    const history = useHistory();

    const handleAppointment = () => {
        history.push('/appointment');
    }

    return (
        <>
            <Bounce>
                <div className="container mt-5 rounded-3 shadow-lg border-0">
                    <nav className="navbar navbar-light bg-info py-3 mt-5">
                        <div className="container">
                            <h3 className="text-white">Get Free Service This Weekend</h3>
                            <div>
                                <button onClick={handleAppointment} type="button" className="btn bg-white text-dark fw-bold">Grab Now</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </Bounce>
        </>
    );
};

export default Offer;