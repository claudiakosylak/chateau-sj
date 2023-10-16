import React from "react";
import "./LandingPage.css";
import Intro from "../Intro";
import DarkSection from "../DarkSection";

function LandingPage() {

    return (
        <div className="landing-page-wrapper">
            <Intro />
            <DarkSection />
        </div>

    )
}

export default LandingPage;
