const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const FETCH_USERS = 'FETCH_USERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

const defaultState = {
    customers: [
        {id:Date.now(), name:'Вася'},
    ]
}
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS : {
            return {
                ...state, customers: [...state.customers, ...action.payload]
            }
        }
        case ADD_CUSTOMER : {
            return {
                ...state, customers: [...state.customers, action.payload]
            }
        }
        case REMOVE_CUSTOMER : {
            return {
                ...state, customers: state.customers.filter( customer => customer.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const addCustomerAction = (name) => ({type:ADD_CUSTOMER, payload:{id:Date.now(), name}})
export const RemoveCustomerAction = (id) => ({type:REMOVE_CUSTOMER, id})
export const addManyCustomersAction = (payload) => ({type:ADD_MANY_CUSTOMERS, payload}) // - Action creator - это функция которая
export const fetchManyCustomersAction = (payload) => ({type:FETCH_USERS}) // - Action creator - это функция которая
// возвращает обьект у которого должен быть как минимум поле type
