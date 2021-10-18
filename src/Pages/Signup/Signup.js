import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <>
            <div className="container-fluid signup-container">
                <div className="w-50 p-5 bg-white rounded-3 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-info fw-bold opacity-75">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-info fw-bold opacity-75">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-info text-white">Sign in</button>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-info text-white">Sign in with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;