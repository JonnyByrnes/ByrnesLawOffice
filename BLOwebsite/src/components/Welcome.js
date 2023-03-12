import React from "react";
import outsideLook from '../photos/frontOfOffice.jpeg';

function Welcome(props) {



    return (
        <div className="body">
            <div className="body-title">
                <img src={outsideLook} alt="Street view of Byrnes Law Office" className="title-photo"/>
            </div>
            <div className="body-content">

                <br/>
                <br/>
                Welcome to Byrnes Law Office, the home of Attorney Brian Byrnes in Amery, Wisconsin. We are delighted to offer our legal services to clients in the area and beyond. As a skilled attorney, Brian specializes in Probate, Elder Law, Estate Planning, Real Estate Planning, and Business Law.
                <br/>
                <br/>
                -----------------------------------------------------------------------------
                <br/>
                <br/>
                At Byrnes Law Office, we believe that every client deserves personalized attention, and we are committed to providing our clients with individualized legal solutions that meet their unique needs. Whether you are seeking legal counsel for a business matter, real estate transaction, or estate planning issue, we are here to help.
                <br/>
                <br/>
                -----------------------------------------------------------------------------
                <br/>
                <br/>
                We understand that navigating the legal system can be overwhelming, and we strive to make the process as stress-free as possible. Our team is dedicated to guiding you through every step of the legal process and ensuring that you understand your options and rights.
                <br/>
                <br/>
                -----------------------------------------------------------------------------
                <br/>
                <br/>
                We invite you to explore our website to learn more about our legal services and how we can help you. If you have any questions or would like to schedule a consultation with Attorney Brian Byrnes, please do not hesitate to contact us. Thank you for considering Byrnes Law Office for your legal needs.

            </div>
        </div>
    );
}
export default Welcome;
