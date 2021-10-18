import React from 'react';
import './About.css';
import Featurebox from './Featurebox/Featurebox';

const About = () => {
    const aboutImg = 'https://st.depositphotos.com/1771835/1477/i/950/depositphotos_14779771-stock-photo-portrait-of-confident-young-doctor.jpg';

    return (
        <>
            <div className="container-fluid about-container mb-5">
                <div className="about-title">
                    <h1 className="text-info opacity-75 fw-bolder title">About Us</h1>
                </div>
            </div>
            <div className="container-fluid mb-5 mt-5">
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="w-75 rounded-3 shadow-lg m-auto mt-5">
                                <img src={aboutImg} className="img-fluid" alt="howwork" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h4 className="fw-bold text-info opacity-75 mt-5">About MediCare</h4>
                            <h2 className="text-muted fw-bold">Best Health Service Provider in this Region</h2>
                            <p className="text-muted">Welcome to one of the best Medical and Health service provider in this region.</p>
                            <Featurebox></Featurebox>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;