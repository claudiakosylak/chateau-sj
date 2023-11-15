import React, { useEffect } from "react";
import styles from "./AdminHome.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import FloorPlanItem from "../FloorPlanItem";
import Footer from "../Footer";

function AdminHome({ floorPlans, onNavigate, adminScrollRef }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const user = useSelector(state => state.session.user)
    const admin = location.pathname === "/admin";

    useEffect(() => {
        onNavigate();
    }, [admin])

    if (!user) {
        return <Redirect to="/"></Redirect>
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.ref} ref={adminScrollRef}></div>
            <h2>Admin Home</h2>
            <div className={styles.plans}>
                {floorPlans?.map(plan => (
                    <div key={plan.id} className={styles.item}>
                        <FloorPlanItem floorPlan={plan} admin={true}/>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default AdminHome;
