import axios from "axios";

const utility = {

}

export const UserPage = {
    fetchUsers: async i => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/?_limit=5").then( response => {
            return response.data
        })
    }
}