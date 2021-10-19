import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const handleSignIn = () => {
        history.push("/signin");
    }

    const handleSignUp = () => {
        history.push("/signup");
    }

    return (
        <>
            {/* notice part */}
            <nav className="navbar navbar-light bg-info">
                <div className="container-fluid">
                    <h5 className="m-auto text-white">Open For Appointment</h5>
                </div>
            </nav>

            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home"><h2 className="fw-bolder text-warning">Medi<span className="text-info opacity-75">Care</span><i className="fas fa-heartbeat text-info"></i></h2></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-5" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleSignIn} type="button" className="btn btn-info fw-bold rounded-pill fs-5 text-white me-2">Sign In</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleSignUp} type="button" className="btn btn-outline-info fw-bold rounded-pill fs-5">Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;