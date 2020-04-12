import { combineReducers } from 'redux'
import customers from "./customReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
    customers: customers,
    users: users
})

export default rootReducer