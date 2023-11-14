import React from "react";
import styles from "./AdminHome.module.sass";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import FloorPlanItem from "../FloorPlanItem";

function AdminHome({ floorPlans }) {
    const user = useSelector(state => state.session.user)

    if (!user) {
        return <Redirect to="/"></Redirect>
    }

    console.log("FLOOR PLANS: ", floorPlans)

    return (
        <div className={styles.wrapper}>
            <h2>Admin Home</h2>
            <div className={styles.plans}>
                {floorPlans?.map(plan => (
                    <div key={plan.id} className={styles.item}>
                        <FloorPlanItem floorPlan={plan} admin={true}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminHome;
