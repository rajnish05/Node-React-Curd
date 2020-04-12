import { GET_USERS, ADD_USER, DELETE_USER } from '../Action/actionType'

const initialState = {
    users: [],
    user: {}
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        case DELETE_USER:
            let users = state.users.filter(user =>
                user._id !== action.payload._id
            )
            return {
                ...state,
                users: users
            }

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default userReducer;