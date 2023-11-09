import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import styles from "./SearchApartments.module.sass";
import { maxRents } from '../../mock-data';

function SearchApartments({ scrollToRef, setCriteria }) {
    const [moveInDate, setMoveInDate] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [maxRent, setMaxRent] = useState("");
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const currentDate = new Date();
    const history = useHistory();

    useEffect(() => {
        const newErrors = {};
        if (moveInDate === "") newErrors.date = "Please enter desired move-in date.";
        if (new Date(moveInDate) <= currentDate) newErrors.date = "Move-in date must be in the future.";
        if (bedrooms === "") newErrors.bedrooms = "Please enter desired number of bedrooms";
        if (maxRent === "") newErrors.rent = "Please select a maximum rent number.";
        setErrors(newErrors);
    }, [moveInDate, bedrooms, maxRent])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setHasSubmitted(true);
        } else {
            const criteria = {
                moveInDate,
                bedrooms,
                maxRent
            }
            setCriteria(criteria)
            history.push("/floor-plans");
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.ref} ref={scrollToRef}></div>
            <img src="https://plus.unsplash.com/premium_photo-1661887292823-f92842e8609d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className={styles.dark}>

                <div className={styles.inner}>
                    <h3>Search Apartments</h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {(hasSubmitted && errors.date) && (
                            <p className={styles.errors}>{errors.date}</p>
                        )}
                        <label>
                            Move-in Date
                            <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className={styles.inputs}></input>
                        </label>
                        {(hasSubmitted && errors.bedrooms) && (
                            <p className={styles.errors}>{errors.bedrooms}</p>
                        )}
                        <label>
                            Bedrooms
                            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className={styles.inputs}>
                                <option value="" disabled>select</option>
                                <option value="studio">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </label>
                        {(hasSubmitted && errors.rent) && (
                            <p className={styles.errors}>{errors.rent}</p>
                        )}
                        <label>
                            Max Rent
                            <select value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className={styles.inputs}>
                                <option value="" disabled>select</option>
                                {maxRents.map(rent => (
                                    <option value={rent.toString()} key={rent}>${rent}</option>
                                ))}
                            </select>
                        </label>
                        <button type="submit">Check Availability</button>
                        <button onClick={() => history.push("/floor-plans")}>View All Floor Plans</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchApartments;
