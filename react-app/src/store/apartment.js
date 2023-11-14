const GET_APARTMENTS = "apartment/GET_APARTMENTS";

// actions go here
const getApartments = apartments => ({
    type: GET_APARTMENTS,
    payload: apartments
});

const initialState = { apartments: {}}


// thunks go here
export const getApartmentsThunk = () => async dispatch => {
    const response = await fetch("/api/apartments");
    if (response.ok) {
        const data = await response.json();
        dispatch(getApartments(data));
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const editApartmentThunk = (date_available, id) => async dispatch => {
    const response = await fetch(`/api/apartments/${id}`, {
        method: "PUT",
		headers: { "Content-Type" : "application/json"},
		body: JSON.stringify({
			date_available
		})
    })
    if (response.ok) {
        const apartment = await response.json();
        return apartment;
    } else {
        return {"error": "Invalid inputs"}
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_APARTMENTS:
            const apartments = {}
            for (let apartment of action.payload.apartments) {
                apartments[apartment.id] = apartment;
            }
            return { apartments: apartments }
        default:
            return state;
    }
}
