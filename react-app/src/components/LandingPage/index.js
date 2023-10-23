import React from "react";
import "./LandingPage.css";
import Intro from "../Intro";
import DarkSection from "../DarkSection";
import SearchApartments from "../SearchApartments";

function LandingPage() {

    return (
        <div className="landing-page-wrapper">
            <Intro />
            <DarkSection />
            <SearchApartments />
        </div>

    )
}

export default LandingPage;
