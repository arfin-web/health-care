import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className="container mt-5 mb-5 overflow-hidden">
                <h2 className="text-center text-info opacity-75 fw-bold">Our Services</h2>
                <p className="text-center text-muted mb-5">Take our World class quality Medical and Health Related services. </p>
                <div className="row g-5 mb-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;