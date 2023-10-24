import React, { useState } from 'react';
import "./SearchApartments.css";

function SearchApartments({scrollToRef}) {
    const [moveInDate, setMoveInDate] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [maxRent, setMaxRent] = useState("");

    return (
        <div className="search-apartments-wrapper">
            <div className="scroll-apartments-ref" ref={scrollToRef}></div>
            <img src="https://plus.unsplash.com/premium_photo-1661887292823-f92842e8609d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="dark-cover">

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
        </div>
    )
}

export default SearchApartments;
