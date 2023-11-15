import React, { useEffect } from "react";
import styles from "./Inbox.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "../../store/contact";

function Inbox() {
    const dispatch = useDispatch();
    const contactsObj = useSelector(state => state.contact.contacts)
    const contacts = Object.values(contactsObj).reverse();

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [])

    return (
        <div className={styles.wrapper}>
            <h2>Inbox</h2>
            <div className={styles.inbox}>
                {contacts.map((contact) => (
                    <div className={styles.contact} key={contact.id}>
                        <p>{contact.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inbox;
