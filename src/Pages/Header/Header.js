import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);

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
                            {
                                user ? <li className="nav-item">
                                    <div className="dropdown dropstart">
                                        <button className="btn btn-info dropdown-toggle text-white rounded-pill fs-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Profile
                                        </button>
                                        <ul className="dropdown-menu p-3 rounded-3 shadow-lg border-0" aria-labelledby="dropdownMenuButton1">
                                            <li><img src={user?.photoURL} className="img-fluid" alt="profilePic" /></li>
                                            <li className="text-info mb-3 mt-2"><h4>{user?.displayName}</h4></li>
                                            <li className="text-muted mb-3">{user?.email}</li>
                                            <li><button onClick={logOut} type="button" className="btn btn-info fw-bold rounded-pill fs-6 text-white">Sign Out</button></li>
                                        </ul>
                                    </div>

                                </li>
                                    :
                                    <div className="auth">
                                        <li className="nav-item">
                                            <button onClick={handleSignIn} type="button" className="btn btn-info fw-bold rounded-pill fs-5 text-white me-2 mb-2">Sign In</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={handleSignUp} type="button" className="btn btn-outline-info fw-bold rounded-pill fs-5">Sign Up</button>
                                        </li>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;