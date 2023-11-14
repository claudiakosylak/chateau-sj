import React, { useState } from "react";
import styles from "./FloorPlanItem.module.sass";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { getFloorPlansThunk, updateFloorPlanThunk } from "../../store/floor_plan";

function FloorPlanItem({ floorPlan, admin }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [editing, setEditing] = useState(false);
    const [rent, setRent] = useState(floorPlan.monthly_rent)
    const [deposit, setDeposit] = useState(floorPlan.deposit_amount)
    const [error, setError ] = useState("");

    const openFloorPlan = (id) => {
        history.push(`/floor-plans/${id}`);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateFloorPlanThunk(rent, deposit, floorPlan.id)).then((response) => {
            if (response.error) {
                setError(response.error)
            } else {
                setEditing(false)
                dispatch(getFloorPlansThunk())
            }
        })
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
            {!editing ? (
            <div className={styles.rent_deposit}>
                <p>Starting at ${floorPlan.monthly_rent}</p>
                <p>Deposit ${floorPlan.deposit_amount}</p>
            </div>
            ) : (
                <form className={styles.form} onSubmit={handleEdit}>
                    <label>
                        Starting at $:
                        <input type="number" min="0" value={rent} onChange={(e) => setRent(e.target.value)}></input>
                    </label>
                    <label>
                        Deposit $:
                        <input type="number" min="0" value={deposit} onChange={(e) => setDeposit(e.target.value)}></input>
                    </label>
                    <div className={styles.edit_buttons}>

                    <button onClick={() => setEditing(false)}>Cancel</button>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            )}
            {admin === false ? (
                <button className={styles.availability} onClick={() => openFloorPlan(floorPlan.id)}>Availability</button>
            ) : (admin === true && editing === false) ? (
                <div className={styles.admin_buttons}>
                    <button className={styles.admin_button} onClick={() => setEditing(true)}>Edit</button>
                    <button className={styles.admin_button} onClick={() => openFloorPlan(floorPlan.id)}>View Availability</button>
                </div>
            ): <div></div>}
        </div>
    )
}

export default FloorPlanItem;
