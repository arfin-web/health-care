import React from 'react';
import './Featurebox.css';

const Featurebox = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card mb-3 border-0 rounded-3 shadow-lg feature-box">
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <div className="bg-info opacity-75 p-2">
                                        <i className="fas fa-hand-holding-medical fs-4 text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body p-2">
                                        <small className="card-title text-muted">Quality of Care</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card mb-3 border-0 rounded-3 shadow-lg feature-box">
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <div className="bg-info opacity-75 p-2">
                                        <i className="fas fa-feather fs-4 text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body p-2">
                                        <small className="card-title text-muted">Standard of Treatment</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card mb-3 border-0 rounded-3 shadow-lg feature-box">
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <div className="bg-info opacity-75 p-2">
                                        <i className="fas fa-bug fs-4 text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body p-2">
                                        <small className="card-title text-muted">Infection Prevention</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card mb-3 border-0 rounded-3 shadow-lg feature-box">
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <div className="bg-info opacity-75 p-2">
                                        <i className="fas fa-clock fs-4 text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body p-2">
                                        <small className="card-title text-muted">24/7 Working Time</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card border-0 rounded-3 shadow-lg mt-5">
                    <div className="card-body">
                        <i className="fas fa-check-square fs-3 me-3 text-info"></i>
                        24 Hours Emergency Assistance Call Us
                    </div>
                    <div className="card-body">
                        <i className="fas fa-check-square fs-3 me-3 text-info"></i>
                        We are committed to providing healthcare service
                    </div>
                    <div className="card-body">
                        <i className="fas fa-check-square fs-3 me-3 text-info"></i>
                        Really know the true needs and expectations of patients
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featurebox;