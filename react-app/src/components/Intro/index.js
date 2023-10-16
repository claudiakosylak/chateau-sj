import React from "react";
import "./Intro.css";

function Intro() {
    return (
        <div className="intro-wrapper">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"></img>
            <div className="dark-cover">
                <div className="intro-content">
                    <h2>Picture yourself here...</h2>
                    <p>Lorem ipsum dolor sit amet. Qui unde corrupti qui voluptas dolor est quis.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;
