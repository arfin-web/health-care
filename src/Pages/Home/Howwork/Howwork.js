import React from 'react';
import Step from './Step/Step';

const Howwork = () => {
    const workImg = 'https://thumbs.dreamstime.com/b/male-doctor-mask-looks-documents-busy-schedule-coronavirus-pandemic-vertical-isolated-white-176166061.jpg';

    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="w-75 rounded-3 shadow-lg m-auto mt-5">
                            <img src={workImg} className="img-fluid" alt="howwork" />
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