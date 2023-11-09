import React, { useState } from "react";
import styles from "./Intro.module.sass";

function Intro({ scrollToRef }) {
    const images = [
        "https://plus.unsplash.com/premium_photo-1661963361199-ed324a3d524d?auto=format&fit=crop&q=80&w=2833&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        "https://images.unsplash.com/photo-1518860308377-800f02d5498a?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661963744385-c72bc34746b9?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    const [currentImage, setCurrentImage] = useState(0);

    setTimeout(() => {
        if (currentImage === 3) setCurrentImage(0);
        else setCurrentImage(currentImage + 1)
    }, 3000)

    return (
        <div className={styles.wrapper} >
            <div className={styles.ref} ref={scrollToRef}></div>
            <img src={images[currentImage]}></img>
            <div className={styles.dark}>
                <div className={styles.content}>
                    <h2>Picture yourself here...</h2>
                    <p>Lorem ipsum dolor sit amet. Qui unde corrupti qui voluptas dolor est quis.</p>
                </div>

            </div>
        </div>
    )
}

export default Intro;
