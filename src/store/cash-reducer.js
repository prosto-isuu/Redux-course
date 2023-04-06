import {UserPage} from "../API/UserPage";
import axios from "axios";

const ADD_CASH = 'ADD_CASH'
const GET_CASH = 'GET_CASH'
const FETCH_USERS = "FETCH_USERS"

const defaultState = {
    cash: 0,
    users: []
}
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH : {
            return {
                ...state, cash: state.cash + action.payload
            }
        }
        case GET_CASH : {
            return {
                ...state, cash: state.cash - action.payload
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

export const addCashAction = () => null;
