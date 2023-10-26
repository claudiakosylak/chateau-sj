import React from "react";
import "./FloorPlanItem.css";

function FloorPlanItem({apartment}) {

    return (
        <div className="floor-plan-item-wrapper">
            <h4>{apartment.floor_plan}</h4>
            <div className="bed-bath-feet">
                <p>{apartment.bedrooms !== 0 && apartment.bedrooms}{apartment.bedrooms === 0 ? "STUDIO" : apartment.bedrooms === 1 ? " BED" : " BEDS"}</p>
                <p>{apartment.bathrooms} {apartment.bathrooms === 1 ? "BATH" : "BATHS"}</p>
                <p>{apartment.squareFeet} SQ. FT.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1582239052618-4e2324cef034?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="rent-deposit">
                <p>Starting at ${apartment.monthlyRent}</p>
                <p>Deposit ${apartment.deposit}</p>
            </div>
            <button className="availability-button">Availability</button>
        </div>
    )
}

export default FloorPlanItem;
