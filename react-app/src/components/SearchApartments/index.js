import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import "./SearchApartments.css";

function SearchApartments({scrollToRef}) {
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
        if (maxRent === "") newErrors.rent = "Please enter a maximum rent number.";
        setErrors(newErrors);
    }, [moveInDate, bedrooms, maxRent])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setHasSubmitted(true);
        } else {
            history.push("/floor-plans");
        }
    }

    return (
        <div className="search-apartments-wrapper">
            <div className="scroll-apartments-ref" ref={scrollToRef}></div>
            <img src="https://plus.unsplash.com/premium_photo-1661887292823-f92842e8609d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="dark-cover">

                <div className="search-apartments-inner">
                    <h3>Search Apartments</h3>
                    <form className="search-apartments-form" onSubmit={handleSubmit}>
                        {(hasSubmitted && errors.date) && (
                            <p className="search-errors">{errors.date}</p>
                        )}
                        <label>
                            Move-in Date
                            <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className="search-apartments-inputs"></input>
                        </label>
                        {(hasSubmitted && errors.bedrooms) && (
                            <p className="search-errors">{errors.bedrooms}</p>
                        )}
                        <label>
                            Bedrooms
                            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="search-apartments-inputs">
                                <option value="" disabled>select</option>
                                <option value="studio">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </label>
                        {(hasSubmitted && errors.rent) && (
                            <p className="search-errors">{errors.rent}</p>
                        )}
                        <label>
                            Max rent
                            <input type="number" min="1" placeholder="$" value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className="search-apartments-inputs"></input>
                        </label>
                        <button type="submit">Check Availability</button>
                        <button>View All Floor Plans</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchApartments;
