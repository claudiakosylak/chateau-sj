import React, { useEffect, useRef } from "react";
import styles from "./LandingPage.module.sass";
import Intro from "../Intro";
import DarkSection from "../DarkSection";
import SearchApartments from "../SearchApartments";
import Footer from "../Footer";

function LandingPage({topScrollRef, aboutScrollRef, floorPlanScrollRef, contactScrollRef, onNavigate, setCriteria}) {

    useEffect(() => {
        onNavigate();
    }, [])

    return (
        <div className={styles.wrapper}>
            <Intro scrollToRef={topScrollRef}/>
            <DarkSection title="welcome" src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            scrollToRef={aboutScrollRef}
            />
            <SearchApartments
            scrollToRef={floorPlanScrollRef}
            setCriteria={setCriteria}
            />
            <DarkSection title="contact" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            scrollToRef={contactScrollRef}
            />
            <Footer />
        </div>

    )
}

export default LandingPage;
