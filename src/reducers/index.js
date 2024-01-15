// src/reducers/index.js
import { combineReducers } from "redux";
import userReducers from "./userReducer";
import counterReducers from "./counterReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
	counter: counterReducers,
	user: userReducers,
	cart: cartReducer,
});

export default rootReducer;
