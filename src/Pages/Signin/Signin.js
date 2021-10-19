import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { handleLogin, resetPassword, signInWithGoogle, setEmail, setPassword, error } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className="container-fluid signin-container">
                <div className="w-50 p-5 bg-white rounded-3 shadow-lg">
                    <form onSubmit={handleLogin} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-info fw-bold opacity-75">Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-info fw-bold opacity-75">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <button onClick={resetPassword} type="button" className="btn btn-info text-white">Reset Password</button>
                        </div>
                        <div className="col-12">
                            <h5 className="text-danger">{error}</h5>
                        </div>
                        <div className="col-12">
                            <h5>Don't have an accunt? <NavLink className="text-info" to="/signup">Sign Up</NavLink></h5>
                        </div>
                        <div className="col-12">
                            <input type="submit" className="btn btn-info text-white" value="Sign In" />
                        </div>
                        <div className="col-12">
                            <button onClick={signInWithGoogle} type="button" className="btn btn-info text-white">Sign in with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signin;