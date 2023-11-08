import React, { useEffect } from "react";
import "./FloorPlanIndex.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getFloorPlansThunk } from "../../store/floor_plan";

function FloorPlanIndex() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const floorPlans = useSelector(state => state.floorPlan.floorPlans);
    const plan = floorPlans[id];

    useEffect(() => {
        dispatch(getFloorPlansThunk());
    }, [])

    console.log("FLOOR PLAN: ", plan)

    return (
        <div className="fpi-wrapper">
            <h2>
                {plan?.name}

            </h2>
        </div>
    )
}

export default FloorPlanIndex;
