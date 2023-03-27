import React, {useState,useEffect} from "react";
import "./concat.scss"


const Concat = () => {

    return (
        <section className={"concat container"} id={"concat"}>

            <div className={"tittle-container"}><h2>Concat</h2></div>

            <div className={"contact-wrapper "}>

                        <section className={"google-maps"}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.2869360951613!2d18.673574778842696!3d50.09934978085537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114b75c74462ab%3A0x9566b1b5a21e9ebd!2sRybnicka%2026B%2C%2044-246%20Szczejkowice!5e0!3m2!1spl!2spl!4v1679448840907!5m2!1spl!2spl"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </section>


                            <form className="contact-form">
                                <input type="text" placeholder="Type your name" className="contact-form-input"/>
                                <input type="email" placeholder="Type your email" className="contact-form-input"/>
                                <textarea placeholder="Type your message"
                                          className="contact-form-input contact-form-message"></textarea>

                                <label className="contact-form-checkbox-label">
                                    <input type="checkbox" className="contact-form-checkbox"/>
                                    <span className="contact-form-checkbox-label-text">I hereby give consent for my personal data
                                    included in my application to be processed for the purposes of the recruitment process under
                                    the European Parliament’s and Council of the European Union Regulation on the Protection of
                                    Natural Persons as of 27 April 2016, with regard to the processing of personal data and on
                                    the free movement of such data, and repealing Directive 95/46/EC (Data Protection
                                    Directive)
                                </span>
                                </label>
                                <button className="button button-white contact-form-button" type="submit">Send</button>
                            </form>





                 </div>
        </section>
    )
}

export default Concat;