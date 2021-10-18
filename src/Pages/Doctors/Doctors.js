import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <>
            <div className="container mt-5 mb-5 overflow-hidden">
                <h2 className="text-center text-info opacity-75 fw-bold">Our Doctors</h2>
                <p className="text-center text-muted mb-5">World Class Qualified Doctors work with us.</p>
                <div className="row g-5 mb-5">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
        </>
    );
};

export default Doctors;