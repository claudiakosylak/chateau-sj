import React, { useState } from "react";
import styles from "./ApartmentItem.module.sass";
import { dateCleaner } from "../../helpers";
import { useDispatch } from "react-redux";
import { editApartmentThunk, getApartmentsThunk } from "../../store/apartment";

function ApartmentItem({ apartment, index, user }) {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState("");
    const [dateAvailable, setDateAvailable] = useState(apartment.date_available);
    const todayDate = new Date();
    const compareDate = new Date(apartment.date_available);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editApartmentThunk(dateAvailable, apartment.id)).then((response) => {
            if (response.error) {
                setError(response.error)
            } else {
                setEditing(false)
                dispatch(getApartmentsThunk())
            }
        })
    }

    return (
        <div key={apartment.id} className={styles.apartment_item}>
            <p>{index + 1}</p>
            {!editing ? (
                <p>{(todayDate > compareDate && !user) ? "Available immediately" : dateCleaner(apartment.date_available)}</p>
            ) : (
                <form onSubmit={handleEdit}>
                    <label>
                        Available on:
                        <input type="date" value={dateAvailable} onChange={(e) => setDateAvailable(e.target.value)}></input>
                    </label>
                    <button type="submit">Submit</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </form>
            )}
            {(user && !editing) ? (
                <button onClick={() => setEditing(true)}>Edit</button>
            ) : <div></div>}
        </div>
    )
}

export default ApartmentItem;
