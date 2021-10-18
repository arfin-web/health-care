import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-5 text-info opacity-75 fw-bold">Get in Touch</h2>
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
                        <label htmlFor="inputTextArea4" className="form-label">Message</label>
                        <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-info text-white">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;