import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';
import Roll from 'react-reveal/Roll';

const Service = ({ service }) => {

    const history = useHistory();

    const { image, title, doctor, id } = service;

    const handleServiceDetails = () => {
        history.push(`./service/${id}`);
    }

    const handleAppointment = () => {
        history.push('/appointment');
    }

    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <Roll>
                    <div className="card border-0 rounded-3 shadow-lg service-box overflow-hidden">
                        <div className="w-75 shadow-lg m-auto mt-5 rounded-3">
                            <img src={image} className="card-img-top img-fluid service-img" alt="service" />
                        </div>
                        <div className="card-body ms-4">
                            <h3 className="card-title text-info">{title}</h3>
                            <h5 className="card-title text-muted">{doctor}</h5>
                            <button onClick={handleAppointment} type="button" className="btn btn-info text-white fw-bold mt-3 rounded-pill me-2">Book Now</button>
                            <button onClick={() => handleServiceDetails(id)} type="button" className="btn btn-outline-info fw-bold mt-3 rounded-pill">Details</button>
                        </div>
                    </div>
                </Roll>
            </div>
        </>
    );
};

export default Service;