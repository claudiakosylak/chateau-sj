import React from "react";
import "./FloorPlanItem.css";

function FloorPlanItem({apartment}) {

    return (
        <div className="floor-plan-item-wrapper">
            <h4>{apartment.name}</h4>
        </div>
    )
}

export default FloorPlanItem;
