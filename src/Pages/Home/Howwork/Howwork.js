import React from 'react';
import Step from './Step/Step';

const Howwork = () => {
    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="w-75 rounded-3 shadow-lg m-auto mt-5">
                            <div className="card" aria-hidden="true">
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                    <button tabindex="-1" className="btn btn-primary disabled placeholder col-6"></button>
                                </div>
                            </div>
                            <div className="card" aria-hidden="true">
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                    <button tabindex="-1" className="btn btn-primary disabled placeholder col-6"></button>
                                </div>
                            </div>
                            <div className="card" aria-hidden="true">
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                    <button tabindex="-1" className="btn btn-primary disabled placeholder col-6"></button>
                                </div>
                            </div>
                            <div className="card" aria-hidden="true">
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                    <button tabindex="-1" className="btn btn-primary disabled placeholder col-6"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <h4 className="fw-bold text-info opacity-75 mt-5">How We Work</h4>
                        <h2 className="text-muted fw-bold">A Comprehensive Directory For Your Health Care</h2>
                        <p className="text-muted">Please Read all the steps carefully for getting our wonderful services properly.</p>
                        <Step></Step>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Howwork;