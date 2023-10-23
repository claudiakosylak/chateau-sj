import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [moveInDate, setMoveInDate] = useState("");

    return (
        <form className="contact-form">
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="contact-form-inputs"></input>
            </label>
            <label>
                Email
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="contact-form-inputs"></input>
            </label>
            <label>
                Phone
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="contact-form-inputs"></input>
            </label>
            <label>
                Bedrooms
                <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="contact-form-inputs">
                    <option value="" disabled>select</option>
                    <option value="studio">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
            <label>
                Move-in Date
                <input type="date" id="move-in-date" value={moveInDate} onChange={(e) => setMoveInDate(e.target.value)} className="contact-form-inputs"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm;
