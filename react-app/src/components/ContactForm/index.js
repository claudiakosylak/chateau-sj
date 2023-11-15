import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.sass";
import { useDispatch } from "react-redux";
import { createContactThunk } from "../../store/contact";

function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [moveInDate, setMoveInDate] = useState("");
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^(?:\(\d{3}\)|\d{3})(?:[.-]?)\d{3}(?:[.-]?)\d{4}$/;
    const currentDate = new Date();

    useEffect(() => {
        const newErrors = {};
        if (name === "") newErrors.name = "Please enter your name.";
        if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address.";
        if (!phoneRegex.test(phone)) newErrors.phone = "Please enter a valid phone number in format 555-555-5555.";
        if (bedrooms === "") newErrors.bedrooms = "Please select your desired number of bedrooms.";
        if (moveInDate === "") newErrors.date = "Please select your desired move-in date.";
        if (new Date(moveInDate) <= currentDate) newErrors.date = "Please select a move-in date in the future.";
        setErrors(newErrors);
    }, [name, email, phone, bedrooms, moveInDate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setHasSubmitted(true)
        } else {
            const contactInfo = {
                name: name,
                email: email,
                phone: phone,
                bedrooms: parseInt(bedrooms),
                move_in_date: moveInDate
            }
            dispatch(createContactThunk(contactInfo)).then((response) => {
                console.log("RESPONSE: ", response)
                if (response.errors) {
                    alert("There has been an error. Please try again.")
                } else {
                    setName("");
                    setEmail("");
                    setPhone("");
                    setBedrooms("");
                    setMoveInDate("");
                    setHasSubmitted(false);
                    alert("Thanks for reaching out! Someone will be in touch with you shortly.")
                }
            })
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {(hasSubmitted && errors.name) && (
                <p className={styles.errors}>{errors.name}</p>
            )}
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.inputs}></input>
            </label>
            {(hasSubmitted && errors.email) && (
                <p className={styles.errors}>{errors.email}</p>
            )}
            <label>
                Email
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputs}></input>
            </label>
            {(hasSubmitted && errors.phone) && (
                <p className={styles.errors}>{errors.phone}</p>
            )}
            <label>
                Phone
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.inputs}></input>
            </label>
            {(hasSubmitted && errors.bedrooms) && (
                <p className={styles.errors}>{errors.bedrooms}</p>
            )}
            <label>
                Bedrooms
                <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className={styles.inputs}>
                    <option value="" disabled>select</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
            {(hasSubmitted && errors.date) && (
                <p className={styles.errors}>{errors.date}</p>
            )}
            <label>
                Move-in Date
                <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className={styles.inputs}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm;
