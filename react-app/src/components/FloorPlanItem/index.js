import React from "react";
import "./FloorPlanItem.css";

function FloorPlanItem({floorPlan}) {

    return (
        <div className="floor-plan-item-wrapper">
            <h4>{floorPlan.name}</h4>
            <div className="bed-bath-feet">
                <p>{floorPlan.bedrooms !== 0 && floorPlan.bedrooms}{floorPlan.bedrooms === 0 ? "STUDIO" : floorPlan.bedrooms === 1 ? " BED" : " BEDS"}</p>
                <p>{floorPlan.bathrooms} {floorPlan.bathrooms === 1 ? "BATH" : "BATHS"}</p>
                <p>{floorPlan.square_feet} SQ. FT.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1582239052618-4e2324cef034?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="rent-deposit">
                <p>Starting at ${floorPlan.monthly_rent}</p>
                <p>Deposit ${floorPlan.deposit_amount}</p>
            </div>
            <button className="availability-button">Availability</button>
        </div>
    )
}

export default FloorPlanItem;
