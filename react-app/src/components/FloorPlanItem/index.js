import React from "react";
import "./FloorPlanItem.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FloorPlanItem({floorPlan}) {
    const history = useHistory();

    const openFloorPlan = (id) => {
        history.push(`/floor-plans/${id}`);
    }

    return (
        <div className="floor-plan-item-wrapper">
            <h4>{floorPlan.name}</h4>
            <div className="bed-bath-feet">
                <p>{floorPlan.bedrooms !== 0 && floorPlan.bedrooms}{floorPlan.bedrooms === 0 ? "STUDIO" : floorPlan.bedrooms === 1 ? " BED" : " BEDS"}</p>
                <p>{floorPlan.bathrooms} {floorPlan.bathrooms === 1 ? "BATH" : "BATHS"}</p>
                <p>{floorPlan.square_feet} SQ. FT.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1582239052618-4e2324cef034"></img>
            <div className="rent-deposit">
                <p>Starting at ${floorPlan.monthly_rent}</p>
                <p>Deposit ${floorPlan.deposit_amount}</p>
            </div>
            <button className="availability-button" onClick={() => openFloorPlan(floorPlan.id)}>Availability</button>
        </div>
    )
}

export default FloorPlanItem;
