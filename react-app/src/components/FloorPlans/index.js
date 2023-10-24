import React, { useState } from "react";
import "./FloorPlans.css";

function FloorPlans() {
    const [moveInDate, setMoveInDate] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [maxRent, setMaxRent] = useState("");

    return (
        <div className="floor-plans-wrapper">
            <img className="floor-plans-header-image" src="https://plus.unsplash.com/premium_photo-1661962302410-36d3325cf9ce?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <h2>Floor Plans</h2>
            <div className="bar"></div>
            <form className="floor-plans-search-wrapper">
                <label>
                    Bedrooms
                    <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="floor-plans-inputs">
                        <option value="" disabled>select</option>
                        <option value="studio">Studio</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
                <label>
                    Bathrooms
                    <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className="floor-plans-inputs">
                        <option value="" disabled>select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <label>
                    Max rent
                    <input type="number" value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className="floor-plans-inputs"></input>
                </label>
                <label>
                    Move-in Date
                    <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className="floor-plans-inputs"></input>
                </label>
            </form>
            <div className="bar"></div>
        </div>
    )
}

export default FloorPlans;
