import {UserPage} from "../API/UserPage";

const ADD_CASH = 'ADD_CASH'
export const ADD_CASH_ASYNC = 'ADD_CASH_ASYNC'
const GET_CASH = 'GET_CASH'
export const GET_CASH_ASYNC = 'GET_CASH_ASYNC'
const FETCH_USERS = "FETCH_USERS"

const defaultState = {
    cash: 0,
    users: []
}
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH : {
            return {
                ...state, cash: state.cash + 1
            }
        }
        case GET_CASH : {
            return {
                ...state, cash: state.cash - 1
            }
        }
        case FETCH_USERS : {
            return {
                ...state, users: [action.payload]
            }
        }
        default:
            return state;
    }
}

const fetchUsersAction = (payload) => ({type: FETCH_USERS, payload: payload})

export const fetchUsersThunk = () => {
    return async dispatch => {
        const response = await UserPage.fetchUsers()
        dispatch(fetchUsersAction(response))
    }
}
export const decrementAction = e => ({type:GET_CASH})
export const addCashAction = () => ({type:ADD_CASH,})
export const addCashAsyncAction = () => ({type:ADD_CASH_ASYNC,})
export const getCashAsyncAction = () => ({type:GET_CASH_ASYNC,})
