import React, { useEffect, useState } from "react";
import styles from "./Inbox.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "../../store/contact";
import ContactItem from "../ContactItem";
import Footer from "../Footer";

function Inbox() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const contactsObj = useSelector(state => state.contact.contacts)
    const contacts = Object.values(contactsObj).reverse();
    const [showContacts, setShowContacts] = useState(contacts.slice(0, 5))
    const [last, setLast] = useState(false)

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [])

    useEffect(() => {
        if (contacts.length <= 5) {
            setLast(true)
        } else {
            setLast(false)
        }
        setShowContacts(contacts.slice(page * 5, (page * 5 + 5)))
    }, [contacts.length])

    const handleNext = () => {
        setPage(page + 1)
        setShowContacts(contacts.slice(page * 5, (page * 5 + 5)))
    }

    const handlePrevious = () => {
        setPage(page - 1)
        setShowContacts(contacts.slice(page * 5, (page * 5 + 5)))
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h2>Inbox</h2>
                <div className={styles.inbox}>
                    {showContacts.map((contact) => (
                        <ContactItem contact={contact} key={contact.id} />
                    ))}
                </div>
                <div className={styles.pagination}>
                    {page > 0 ? (
                        <button onClick={handlePrevious} className={styles.page_buttons}>Previous</button>
                    ) : <div className={styles.page_buttons}></div>}
                    <div>Results {page * 5 + 1} - {page * 5 + 5} of {contacts.length}</div>
                    {!last ? (
                        <button onClick={handleNext} className={styles.page_buttons}>Next</button>
                    ) : <div className={styles.page_buttons}></div>}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inbox;
