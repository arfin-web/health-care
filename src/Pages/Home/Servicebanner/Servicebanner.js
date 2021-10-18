import React from 'react';
import { useHistory } from 'react-router';

const Servicebanner = () => {
    const history = useHistory();

    const handleDoctor = () => {
        history.push('/doctors');
    }

    const handleAppointment = () => {
        history.push('/appointment');
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row gx-0">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4">
                            <i className="fas fa-user-md fs-1 ms-3 mb-3 mt-2 text-info"></i>
                            <div className="card-body">
                                <h4 className="card-title text-info">Doctors Timeline</h4>
                                <p className="card-text">World Class doctors work with us to give you the best service.</p>
                                <button onClick={handleDoctor} type="button" className="btn btn-info text-white fw-bold">See Timeline <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-info">
                            <i className="fas fa-ambulance fs-1 ms-3 mb-3 mt-2 text-white"></i>
                            <div className="card-body">
                                <h4 className="card-title text-white">Emergency Call</h4>
                                <p className="card-text">Our emergency team is always ready and active to give any kind of emergency service. Call anytime to get emergency service.</p>
                                <button type="button" className="btn bg-white text-dark fw-bold"><i className="fas fa-phone-alt"></i> +8801254786</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4">
                            <i className="fas fa-id-card fs-1 ms-3 mb-3 mt-2 text-info"></i>
                            <div className="card-body">
                                <h4 className="card-title text-info">Make An Appointment</h4>
                                <p className="card-text">For getting medical or health related services, you have to make an Appointment first.</p>
                                <button onClick={handleAppointment} type="button" className="btn btn-info text-white"><i className="fas fa-calendar-check"></i> Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Servicebanner;