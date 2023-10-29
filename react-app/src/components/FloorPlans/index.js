import React, { useState, useEffect } from "react";
// import { apartmentUnits } from "../../mock-data";
import "./FloorPlans.css";
import FloorPlanItem from "../FloorPlanItem";
import { useDispatch, useSelector } from "react-redux";
import { getFloorPlansThunk } from "../../store/floor_plan";

function FloorPlans({searchScrollRef, onNavigate}) {
    const [moveInDate, setMoveInDate] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [maxRent, setMaxRent] = useState("");
    const floorPlans = useSelector(state => state.floorPlan.floorPlans)
    let floorPlanArray = Object.values(floorPlans);
    const [results, setResults] = useState(floorPlanArray || []);
    const dispatch = useDispatch();

    useEffect(() => {
        onNavigate();
        dispatch(getFloorPlansThunk());
        setResults(floorPlanArray)
    }, [dispatch])

    useEffect(() => {
        const newResults = floorPlanArray?.filter(result => {
            let passing = true;
            if (moveInDate !== "") {
                for (let apartment of result.apartments) {
                    if (apartment.date_available > new Date(moveInDate)) passing = false;
                }
            }
            if (
                // (moveInDate !== "" && result.availability > new Date(moveInDate)) ||
            (bedrooms !== "" && result.bedrooms !== parseInt(bedrooms)) ||
            (bathrooms !== "" && result.bathrooms !== parseInt(bathrooms)) ||
            (maxRent !== "" && result.monthly_rent > parseInt(maxRent))) passing = false;
            return passing;
        })
        setResults(newResults)
    }, [moveInDate, bedrooms, bathrooms, maxRent])



    return (
        <div className="floor-plans-wrapper">
            {console.log("floor plan array: ", floorPlanArray)}
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
                    Max rent
                    <input type="number" value={maxRent} placeholder="$" onChange={(e) => setMaxRent(e.target.value)} className="floor-plans-inputs"></input>
                </label>
                <label>
                    Move-in Date
                    <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className="floor-plans-inputs"></input>
                </label>
            </form>
            <div className="bar"></div>
            <div className="floor-plan-results-grid">
                {floorPlanArray.map((floorPlan, index) => (
                    <FloorPlanItem floorPlan={floorPlan} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FloorPlans;
