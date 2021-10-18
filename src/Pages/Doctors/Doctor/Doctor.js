import React from 'react';

const Doctor = (props) => {
    const { drimg, doctor, department } = props.doctor;

    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="card border-0 rounded-3 shadow-lg service-box overflow-hidden">
                    <div className="w-75 shadow-lg m-auto mt-5 rounded-3">
                        <img src={drimg} className="card-img-top img-fluid service-img" alt="service" />
                    </div>
                    <div className="card-body ms-4">
                        <h3 className="card-title text-info">{doctor}</h3>
                        <h5 className="card-title text-muted">{department}</h5>
                        <button type="button" className="btn btn-info text-white fw-bold mt-3 rounded-pill">Know More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctor;