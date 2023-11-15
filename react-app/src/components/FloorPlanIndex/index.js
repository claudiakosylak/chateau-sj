import React, { useEffect, useState } from "react";
import styles from "./FloorPlanIndex.module.sass";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getFloorPlansThunk } from "../../store/floor_plan";
import { getApartmentsThunk } from "../../store/apartment";
import { dateCleaner } from "../../helpers";
import Footer from "../Footer";
import ApartmentItem from "../ApartmentItem";

function FloorPlanIndex({ indexScrollRef, onNavigate }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const floorPlans = useSelector(state => state.floorPlan.floorPlans);
    const allApartments = useSelector(state => state.apartment.apartments);
    const user = useSelector(state => state.session.user)
    const apartmentsList = Object.values(allApartments);
    const plan = floorPlans[id];
    const apartments = apartmentsList.filter((apartment) => apartment.floor_plan_id === plan.id)
    const images = [plan?.image_1,
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1680281937008-f9b19ed9afb6?auto=format&fit=crop&q=80&w=2026&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    const [image, setImage] = useState(0);

    useEffect(() => {
        dispatch(getFloorPlansThunk());
        dispatch(getApartmentsThunk());
    }, [])

    useEffect(() => {
        onNavigate();
    }, [id])

    const handleLeft = () => {
        if (image === 0) {
            setImage(images.length - 1)
        } else {
            setImage(image - 1);
        }
    }

    const handleRight = () => {
        if (image === images.length - 1) {
            setImage(0)
        } else {
            setImage(image + 1);
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.ref} ref={indexScrollRef}></div>
                <div className={styles.top}>
                    <div className={styles.back}>
                    <i className={`fa-solid fa-arrow-left ${styles.back_button}`} onClick={() => {
                        if (user) {
                            history.push("/admin")
                        } else {
                            history.push("/floor-plans")
                        }
                    }}></i>
                    </div>
                    <h2>{plan?.name}</h2>
                    <div className={styles.top_middle}>

                        <div className={styles.carousel}>
                            <i className={`fa-solid fa-angle-left ${styles.carousel_button}`} onClick={handleLeft}></i>
                            <img src={images[image]} alt={`${plan?.name} picture`}></img>
                            <i className={`fa-solid fa-angle-right ${styles.carousel_button}`} onClick={handleRight}></i>
                        </div>
                        <div className={styles.apt_details}>
                            <div className={styles.apartments_list}>
                                <h3>Available Units</h3>
                                {apartments.map((apartment, index) => (
                                    <ApartmentItem key={apartment.id} apartment={apartment} index={index} user={user}/>
                                ))}
                            </div>
                            <div className={styles.floor_plan_details}>
                                <div className={styles.floor_plan_left}>
                                    <p>Rent: ${plan?.monthly_rent}</p>
                                    <p>Deposit: ${plan?.deposit_amount}</p>
                                    <p>Sq. Ft.: {plan?.square_feet}</p>
                                    <p>{plan?.bedrooms === 0 ? "Studio" : plan?.bedrooms === 1 ? `${plan?.bedrooms} Bedroom` : `${plan?.bedrooms} Bedrooms`}</p>
                                    <p>{plan?.bathrooms === 1 ? "1 Bathroom" : `${plan?.bathrooms} Bathrooms`}</p>
                                </div>
                                {!user ? (
                                    <button className={styles.contact} onClick={() => history.push("/", { to: "contact" })}>Contact Us</button>
                                ) : <div></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FloorPlanIndex;
