import axios from "axios";
import {addManyCustomersAction} from "../store/customers-reducer";

export const addManyCustomersThunk = () => {
    return async dispatch => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch(addManyCustomersAction(response.data))
    }
}