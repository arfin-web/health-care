import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css';

const Banner = () => {
    const history = useHistory();

    const handleContact = () => {
        history.push('/contact');
    }

    return (
        <>
            <div className="container-fluid banner mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="bg-white w-75 m-auto mt-5 p-5 rounded-3 shadow-lg">
                            <h1 className="fw-bolder text-info opacity-75">Best Medical and Healthcare Service For You</h1>
                            <p className="text-muted">We are here for you to give the best medical and health care services to you and your family</p>
                            <button onClick={handleContact} type="button" className="btn btn-info text-white fw-bold rounded-pill fs-4 mt-3"><i className="fas fa-id-badge"></i> Contact Us</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;