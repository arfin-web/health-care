import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Signup.css';

const Signup = () => {
    const { handleRegistration, signInWithGoogle, setEmail, setPassword, error } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className="container-fluid signup-container">
                <div className="w-50 p-5 bg-white rounded-3 shadow-lg">
                    <form onSubmit={handleRegistration} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-info fw-bold opacity-75">Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-info fw-bold opacity-75">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" required />
                        </div>
                        <div className="col-12">
                            <h5 className="text-danger">{error}</h5>
                        </div>
                        <div className="col-12">
                            <h5>Already Registerd? <NavLink className="text-info" to="/signin">Sign In</NavLink></h5>
                        </div>
                        <div className="col-12">
                            <input type="submit" className="btn btn-info text-white" value="Sign Up" />
                        </div>
                        <div className="col-12">
                            <button onClick={signInWithGoogle} type="button" className="btn btn-info text-white">Sign up with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;