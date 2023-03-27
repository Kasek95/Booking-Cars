import React from 'react';
import {Link} from "react-router-dom";
import "./greetingsection.scss"


const GreetingSection = () => {
    return (
        <section className={"home"}>
            <div className="banner-overlay"></div>
            <div className="greetingSection">
                <h1 className="banner-title">Royal Cars</h1>
                <p className="banner-text">We are a company that rents cars for events, weddings and occasional trips.</p>
                <div className="banner-buttons">
                    <Link className={"button button-red"} to={"/Fleet"}>Fleet of Vehicles</Link>
                    <Link className={"button button-white"} to={"/AddVehicle"}>Earn with Us</Link>
                </div>
            </div>
        </section>
    )
}

export default GreetingSection;
