import React, { useState, useEffect } from "react";
// import { apartmentUnits } from "../../mock-data";
import "./FloorPlans.css";
import FloorPlanItem from "../FloorPlanItem";
import { useDispatch } from "react-redux";
import { maxRents } from "../../mock-data";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FloorPlans({ searchScrollRef, onNavigate, floorPlans, criteria, setCriteria }) {
    const history = useHistory();
    const filterResults = () => {
        const newResults = floorPlans.filter(result => {
            let passing = true;
            if (moveInDate !== "") {
                for (let apartment of result.apartments) {
                    if (apartment.date_available > new Date(moveInDate)) passing = false;
                }
            }
            if ((bedrooms !== "" && result.bedrooms !== parseInt(bedrooms)) ||
                (bathrooms !== "" && result.bathrooms !== parseInt(bathrooms)) ||
                (maxRent !== "" && result.monthly_rent > parseInt(maxRent))) passing = false;
            return passing;
        })
        setResults(newResults)
    }
    const [moveInDate, setMoveInDate] = useState(criteria ? criteria.moveInDate : "");
    const [bedrooms, setBedrooms] = useState(criteria ? criteria.bedrooms : "");
    const [bathrooms, setBathrooms] = useState("");
    const [maxRent, setMaxRent] = useState(criteria ? criteria.maxRent : "");
    const [results, setResults] = useState(floorPlans);
    const dispatch = useDispatch();
    const today = new Date();


    useEffect(() => {
        onNavigate();
        if (criteria) {
            filterResults();
            setCriteria(null);
        }
    }, [dispatch])

    useEffect(() => {
        filterResults();
    }, [moveInDate, bedrooms, bathrooms, maxRent])



    return (
        <div className="floor-plans-wrapper">
            {console.log("HISTORY: ", history)}
            <div className="floor-plans-ref" ref={searchScrollRef}></div>
            <img className="floor-plans-header-image" src="https://plus.unsplash.com/premium_photo-1661962302410-36d3325cf9ce?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <h2>Floor Plans</h2>
            <div className="bar"></div>
            <form className="floor-plans-search-wrapper">
                <label>
                    Bedrooms
                    <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="floor-plans-inputs">
                        <option value="" disabled>select</option>
                        <option value="0">Studio</option>
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
                    Max Rent
                    <select value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className="floor-plans-inputs">
                        <option value="" disabled>select</option>
                        {maxRents.map(rent => (
                            <option value={rent.toString()} key={rent}>${rent}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Move-in Date
                    <input type="date" id="move-in-date" value={moveInDate} min={today} onChange={(e) => setMoveInDate(e.target.value)} className="floor-plans-inputs"></input>
                </label>
            </form>
            <div className="bar"></div>
            <div className="floor-plan-results-grid">
                {results.map((floorPlan, index) => (
                    <FloorPlanItem floorPlan={floorPlan} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FloorPlans;
