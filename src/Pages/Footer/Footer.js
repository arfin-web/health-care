import React from 'react';
import './Footer.css';

const Footer = () => {
    const paymentPic = 'https://www.pngitem.com/pimgs/m/668-6689598_payment-gateway-in-bangladesh-hd-png-download.png';

    return (
        <>
            <div className="mt-5 mb-5">
                <div className="container bg-info opacity-75 p-3 mb-5 shadow-lg rounded-3">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-12">
                            <h3 className="text-white fw-bolder">+8801478591</h3>
                            <p className="text-white">Dhaka, Bangladesh</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <h5 className="ms-5 text-white fw-bold">Follow Us</h5>
                            <div className="social-icons ms-5">
                                <i className="fab fa-facebook-square fs-1 me-3 text-white"></i>
                                <i className="fab fa-whatsapp-square fs-1 me-3 text-white"></i>
                                <i className="fab fa-instagram-square fs-1 me-3 text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-lg">
                                <div className="card-header">
                                    <h5 className="text-info opacity-75 fw-bold">Services</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Eye Care</li>
                                    <li className="list-group-item">Medical Checkup</li>
                                    <li className="list-group-item">Dental Care</li>
                                    <li className="list-group-item">Cardiology</li>
                                    <li className="list-group-item">Laboratory Service</li>
                                    <li className="list-group-item">Vaccination</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-lg">
                                <div className="card-header">
                                    <h5 className="text-info opacity-75 fw-bold">Join Us</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Become a donar</li>
                                    <li className="list-group-item">Apply job vacancies</li>
                                    <li className="list-group-item">Become Our Partner</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="border-0 rounded-3 shadow-lg">
                                <img src={paymentPic} className="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <p className="text-center fw-bold"><span className="text-info opacity-75 fs-6 fw-bolder">&#169; </span> Created By Arfin Priom || All Rights Resrved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;