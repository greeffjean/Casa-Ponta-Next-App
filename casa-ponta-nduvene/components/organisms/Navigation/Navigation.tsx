import React from 'react';

export const Navigation = () => {
    return (
        <>
            <div className="nav-button">
                <a className="nav-slider" href="">
                    <p><i className="fas fa-bars"></i></p>
                </a>
            </div>


            <div className="nav">
                <a className="nav-link" href="#page1"> Home </a>
                <a className="nav-link about-link" href="#page2"> About </a>
                <a className="nav-link gallery-link" href="#page3"> Gallery </a>
                <a className="nav-link review-link" href="#page4"> Reviews </a>
                <a className="nav-link contact-link" href="#page5"> Contact </a>
            </div>
        </>
    )
}