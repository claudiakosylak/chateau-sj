const GET_FLOOR_PLANS = "floor_plan/GET_FLOOR_PLANS";

// actions go here
const getFloorPlans = floorPlans => ({
    type: GET_FLOOR_PLANS,
    payload: floorPlans
});

const initialState = { floorPlans: {}}

// thunks go here
export const getFloorPlansThunk = () => async dispatch => {
    const response = await fetch("/api/floor-plans");
    if (response.ok) {
        const data = await response.json();
        dispatch(getFloorPlans(data));
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const updateFloorPlanThunk = (rent, deposit, planId) => async dispatch => {
    const response = await fetch(`/api/floor-plans/${planId}`, {
        method: "PUT",
		headers: { "Content-Type" : "application/json"},
		body: JSON.stringify({
			rent,
			deposit
		})
    })
    if (response.ok) {
        const plan = await response.json();
        return plan;
    } else {
        return {"error": "Invalid inputs"}
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FLOOR_PLANS:
            const newFloorPlans = {}
            for (let floorPlan of action.payload.floor_plans) {
                newFloorPlans[floorPlan.id] = floorPlan;
            }
            return { floorPlans: newFloorPlans }
        default:
            return state;
    }
}
