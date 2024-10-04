import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

// TODO: pass a reducer Function here,
const store =  createStore(bookingReducer);

export default store;