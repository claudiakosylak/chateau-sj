import React from "react";
import styles from "./FloorPlanItem.module.sass";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FloorPlanItem({ floorPlan, admin }) {
    const history = useHistory();

    const openFloorPlan = (id) => {
        history.push(`/floor-plans/${id}`);
    }

    return (
        <div className={styles.wrapper}>
            <h4>{floorPlan.name}</h4>
            <div className={styles.bed_bath_feet}>
                <p>{floorPlan.bedrooms !== 0 && floorPlan.bedrooms}{floorPlan.bedrooms === 0 ? "STUDIO" : floorPlan.bedrooms === 1 ? " BED" : " BEDS"}</p>
                <p>{floorPlan.bathrooms} {floorPlan.bathrooms === 1 ? "BATH" : "BATHS"}</p>
                <p>{floorPlan.square_feet} SQ. FT.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1582239052618-4e2324cef034"></img>
            <div className={styles.rent_deposit}>
                <p>Starting at ${floorPlan.monthly_rent}</p>
                <p>Deposit ${floorPlan.deposit_amount}</p>
            </div>
            {admin === false ? (
                <button className={styles.availability} onClick={() => openFloorPlan(floorPlan.id)}>Availability</button>
            ) : (
                <div className={styles.admin_buttons}>
                    <button className={styles.admin_button}>Edit</button>
                    <button className={styles.admin_button}>View Availability</button>
                </div>
            )}
        </div>
    )
}

export default FloorPlanItem;
