import React, { useState, useEffect } from "react";
import styles from "./FloorPlans.module.sass";
import FloorPlanItem from "../FloorPlanItem";
import { useDispatch } from "react-redux";
import { maxRents } from "../../mock-data";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer";

function FloorPlans({ searchScrollRef, onNavigate, floorPlans, criteria, setCriteria }) {
    const history = useHistory();
    const [moveInDate, setMoveInDate] = useState(criteria ? criteria.moveInDate : "");
    const [bedrooms, setBedrooms] = useState(criteria ? criteria.bedrooms : "");
    const [bathrooms, setBathrooms] = useState("");
    const [maxRent, setMaxRent] = useState(criteria ? criteria.maxRent : "");
    const [results, setResults] = useState(floorPlans);
    const dispatch = useDispatch();
    const today = new Date();

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

    useEffect(() => {
        onNavigate();
        if (criteria) {
            filterResults();
            setCriteria(null);
        }
    }, [dispatch])

    useEffect(() => {
        if (criteria) {
            filterResults();
            setCriteria(null);
        } else {
            setResults(floorPlans)
        }
    }, [floorPlans])

    useEffect(() => {
        filterResults();
    }, [moveInDate, bedrooms, bathrooms, maxRent])



    return (
        <div className={styles.wrapper}>
            <div className={styles.ref} ref={searchScrollRef}></div>
            <img className={styles.header_image} src="https://plus.unsplash.com/premium_photo-1661962302410-36d3325cf9ce?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <h2>Floor Plans</h2>
            <form className={styles.search}>
                <label>
                    Bedrooms
                    <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className={styles.inputs}>
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
                    <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className={styles.inputs}>
                        <option value="" disabled>select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <label>
                    Max Rent
                    <select value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className={styles.inputs}>
                        <option value="" disabled>select</option>
                        {maxRents.map(rent => (
                            <option value={rent.toString()} key={rent}>${rent}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Move-in Date
                    <input type="date" id="move-in-date" value={moveInDate} min={today} onChange={(e) => setMoveInDate(e.target.value)} className={styles.inputs}></input>
                </label>
            </form>
            <div className={styles.grid}>
                {results.map((floorPlan, index) => (
                    <FloorPlanItem floorPlan={floorPlan} key={index} admin={false}/>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default FloorPlans;
