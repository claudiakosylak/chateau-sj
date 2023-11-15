const GET_CONTACTS = "contact/GET_CONTACTS";

const getContacts = contacts => ({
    type: GET_CONTACTS,
    contacts
})

const initialState = { contacts: {}}

export const getContactsThunk = () => async dispatch => {
    const response = await fetch("/api/contacts");
    if (response.ok) {
        const data = await response.json();
        dispatch(getContacts(data));
    } else {
        return ["An error occurred. Please try again."];
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            const contacts = {}
            for (let contact of action.contacts.contacts) {
                contacts[contact.id] = contact;
            }
            return { contacts: contacts }
        default:
            return state;
    }
}
