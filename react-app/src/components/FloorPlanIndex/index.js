import React, { useEffect } from "react";
import "./FloorPlanIndex.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getFloorPlansThunk } from "../../store/floor_plan";
import { getApartmentsThunk } from "../../store/apartment";

function FloorPlanIndex() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const floorPlans = useSelector(state => state.floorPlan.floorPlans);
    const allApartments = useSelector(state => state.apartment.apartments);
    const apartmentsList = Object.values(allApartments);
    const plan = floorPlans[id];
    const apartments = apartmentsList.filter((apartment) => apartment.floor_plan_id === plan.id)

    useEffect(() => {
        dispatch(getFloorPlansThunk());
        dispatch(getApartmentsThunk());
    }, [])

    console.log("apartments: ", apartments)

    return (
        <div className="fpi-wrapper">
            <div className="fpi-top">
                <i className="fa-solid fa-arrow-left back-button" onClick={() => history.push("/floor-plans")}></i>
                <h2>{plan?.name}</h2>
                <div className="fpi-top-middle">

                    <div className="fpi-carousel">
                        <img src={plan?.image_1} alt={`${plan?.name} picture`}></img>
                    </div>
                    <div className="fpi-apartments-list">
                        {apartments.map((apartment, index) => (
                            <div key={apartment.id}>
                                <p>{index + 1}</p>
                                <p>{apartment.date_available}</p>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloorPlanIndex;
