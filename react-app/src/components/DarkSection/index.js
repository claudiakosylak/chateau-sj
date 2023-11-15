import React, { useState, useEffect } from "react";
import styles from "./DarkSection.module.sass";
import ContactForm from "../ContactForm";

function DarkSection({ title, src, scrollToRef }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 474 ? true : false)
    const [hasErrors, setHasErrors] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 474) setIsMobile(true)
            else setIsMobile(false)
        })
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth <= 474) setIsMobile(true)
            else setIsMobile(false)
        })
    })

    return (
        <div className={styles.wrapper} style={(isMobile && !hasErrors) ? {height: "fit-content"} : (isMobile && hasErrors) ? {height: "990px"} : {height: "fit-content"} }>
            <div className={styles.ref} ref={scrollToRef}></div>
            {/* <ScrollAnimation animateIn="fadeIn" className="dark-section-inner" animateOnce={false} duration={1}> */}
            <div className={styles.inner}>
                <div className={styles.left}>
                    {title !== "contact" && (
                        <img src={src}></img>
                    )}
                    {title === "contact" && (
                        <div className={styles.contact_left}>
                            <p>1234 Address Dr<br></br>Fresno, CA 00000</p>
                            <p>(559) 555-5555</p>
                            <p>chateausanjose@email.com</p>
                            <p>Office Hours:<br></br>9-5 M-F</p>
                        </div>
                    )}
                </div>
                <div className={styles.right}>
                    <h3>{title === "welcome" ? "Welcome" : "Contact Us"}</h3>
                    {title === "welcome" ? (
                        <p>Lorem ipsum dolor sit amet. Et quidem dolor ut commodi omnis est rerum magnam est voluptatem enim ab consectetur eaque. Ea dolorem asperiores est sequi excepturi ut accusamus sapiente ex laborum dolor? In perspiciatis Quis sed esse obcaecati et dolor minima. Eos molestiae quas qui amet galisum qui odit sunt est doloribus incidunt in voluptatem assumenda.</p>
                    ) : (
                        <>
                           <ContactForm setHasErrors={setHasErrors}/>
                        </>
                    )}
                </div>
            </div>
            {/* </ScrollAnimation> */}
        </div>
    )
}

export default DarkSection;
