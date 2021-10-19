import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Doctordetails = () => {
    const { serviceId } = useParams();

    const history = useHistory();

    const [doctordetail, setDoctorDetail] = useState({});

    useEffect(() => {
        const url = `https://arfin-web.github.io/health-api/${serviceId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctorDetail(data))
    }, [])

    const handleAppointment = () => {
        history.push('/appointment');
    }

    return (
        <>
            <div className="container-fluid mb-5 mt-5">
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="w-75 rounded-3 shadow-lg m-auto mt-5">
                                <img src={doctordetail.drimg} className="img-fluid" alt="doctordetail" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h4 className="fw-bold text-info opacity-75 mt-5">{doctordetail.doctor}</h4>
                            <h2 className="text-muted fw-bold">{doctordetail.department}</h2>
                            <p className="text-muted">{doctordetail.drDes}</p>
                            <button onClick={handleAppointment} type="button" className="btn btn-info text-white fw-bold mt-3 rounded-pill">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctordetails;