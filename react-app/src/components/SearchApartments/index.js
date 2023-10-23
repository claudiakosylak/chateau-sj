import React, { useState } from 'react';
import "./SearchApartments.css";

function SearchApartments() {
    const [moveInDate, setMoveInDate] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [maxRent, setMaxRent] = useState("");

    return (
        <div className="search-apartments-wrapper">
            <div className="search-apartments-inner">
                <h3>Search Apartments</h3>
                <form className="search-apartments-form">
                    <label>
                        Move-in Date
                        <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className="search-apartments-inputs"></input>
                    </label>
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
                    <label>
                        Max rent
                        <input type="number" value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className="search-apartments-inputs"></input>
                    </label>
                    <button type="submit">Check Availability</button>
                    <button>View All Floor Plans</button>
                </form>
            </div>
        </div>
    )
}

export default SearchApartments;
