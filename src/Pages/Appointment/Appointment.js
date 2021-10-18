import React from 'react';

const Appointment = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-5 text-info opacity-75 fw-bold">Make An Appointment</h2>
                <form className="row g-3">
                    <div className="col-md-12">
                        <label htmlFor="inputName4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName4" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-12">
                        <select className="form-select mt-3" aria-label="Default select example">
                            <option selected>Medical Checkup</option>
                            <option value="1">Eye Care</option>
                            <option value="2">Dental Care</option>
                            <option value="3">Cardiology</option>
                            <option value="4">Laboratory Service</option>
                            <option value="5">Vaccination</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <select className="form-select mt-3 mb-3" aria-label="Default select example">
                            <option selected>Dr Alfred</option>
                            <option value="1">Dr John</option>
                            <option value="2">Dr Mash</option>
                            <option value="3">Dr Mohr</option>
                            <option value="4">Dr Alexa</option>
                            <option value="5">Dr Simu</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-info text-white">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Appointment;