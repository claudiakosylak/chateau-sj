import React from "react";
import "./DarkSection.css";
import ContactForm from "../ContactForm";

function DarkSection({ title, src, scrollToRef }) {

    return (
        <div className="dark-section-wrapper" >
            <div className="dark-section-ref" ref={scrollToRef}></div>
            <div className="dark-section-inner">
                <div className="dark-section-left">
                    <img src={src}></img>
                    {title === "contact" && (
                        <div className="contact-left">
                            <p>1234 Address Dr<br></br>Fresno, CA 00000</p>
                            <p>(559) 555-5555</p>
                            <p>chateausanjose@email.com</p>
                            <p>Office Hours:<br></br>9-5 M-F</p>
                        </div>
                    )}
                </div>
                <div className="dark-section-right">
                    <h3>{title === "welcome" ? "Welcome" : "Contact Us"}</h3>
                    {title === "welcome" ? (
                        <p>Lorem ipsum dolor sit amet. Et quidem dolor ut commodi omnis est rerum magnam est voluptatem enim ab consectetur eaque. Ea dolorem asperiores est sequi excepturi ut accusamus sapiente ex laborum dolor? In perspiciatis Quis sed esse obcaecati et dolor minima. Eos molestiae quas qui amet galisum qui odit sunt est doloribus incidunt in voluptatem assumenda.</p>
                    ) : (
                        <>
                            <p>Lorem ipsum dolor sit amet. Et quidem dolor ut commodi omnis est rerum magnam est voluptatem enim ab consectetur eaque</p>
                            <ContactForm />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DarkSection;
