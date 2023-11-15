import React from "react";
import styles from "./ContactItem.module.sass";
import { contactDateCleaner, moveInDateCleaner } from "../../helpers";

function ContactItem({ contact }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <p>{contactDateCleaner(contact.created_at)[0]}</p>
                <p>{contactDateCleaner(contact.created_at)[1]} PST</p>
            </div>
            <div className={styles.middle}>
                <p>Name: {contact.name}</p>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>

            </div>
            <div className={styles.right}>
                <p>Desired # of Bedrooms: {contact.bedrooms}</p>
                <p>Desired Move-in Date: {moveInDateCleaner(contact.move_in_date)}</p>
            </div>
        </div>
    )
}

export default ContactItem;
