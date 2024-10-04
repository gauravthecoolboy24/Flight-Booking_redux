/* eslint-disable no-case-declarations */
import { BOOKING, DELETE } from "./actionsTypes";

const initailState = {
    data: []
};

const bookingReducer = (state = initailState, action) => {
    switch (action.type) {
        case BOOKING:
            const newDate = [...state.data]
            newDate.push(action.payload)
            return {
                data: newDate
            }
        case DELETE:
            const filteredData = state.data.filter((d) => d.id !== action.payload);
            return {
                data: filteredData
            }
        default:
            return state;
    }
}

export default bookingReducer;