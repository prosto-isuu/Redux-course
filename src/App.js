import React from 'react';
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {ADD_CASH_ASYNC, addCashAsyncAction, decrementAction, fetchUsersThunk} from "./store/cash-reducer";
import {addCustomerAction, fetchManyCustomersAction, RemoveCustomerAction} from "./store/customers-reducer";
import {addManyCustomersThunk} from "./API/customer";
import {generatorFunction} from "./Saga/test";

const App = () => {
    const users = useSelector(state => state.Cash.users)
    const customers = useSelector(state => state.Customers.customers)
    // В современном redux выпустила свой хук с которым можно задиспачить что-то
    const dispatch = useDispatch()

    // А чтобы получить состояние нужно возпользоваться хуком useSelector

    // const iter = generatorFunction() - Здесь изпользуется функция генератор и выводит в
    // в каждый новый раз новое значение и преждевременно отключая себя
    // console.log(iter.next())
    // console.log(iter.next())
    // console.log(iter.next())
    // console.log(iter.next())
    // console.log(iter.next())
    // console.log(iter.next())
    const onAddCustomerHandle = (name) => {
        dispatch(addCustomerAction(name))
    }

    const onCallSagaHandle =  e => {
        dispatch(addCashAsyncAction())
    }
    const onCallSagaDecrementHandle =  e => {
        dispatch(decrementAction())
    }
    const onRemoveCustomerHandle = (id) => {
        dispatch(RemoveCustomerAction(id))
    }

    const onAddManyCustomersHandle = () => {
        dispatch(addManyCustomersThunk())
    }
    const onFetchManyCustomersHandle = () => {
        dispatch(fetchManyCustomersAction())
    }
    function onAddCash(cash) {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    function onGetCash(cash) {
        dispatch({type: "GET_CASH", payload: cash})
    }

    function onfetchUsers() {
        dispatch(fetchUsersThunk())
        console.log('Диспатч отработал!')
    }

    const cash = useSelector(state => state.Cash.cash)
    return (<div
            className='app-wrapper'
        >
            <div>{cash}</div>
            <button onClick={e => alert('😝')}>Нажми чтобы вызвать меня</button>
            <button onClick={() => onAddCash(Number(prompt()))}>Добавить деньги</button>
            <button onClick={() => onGetCash(Number(prompt()))}>Взять деньги</button>
            <button onClick={() => onAddCustomerHandle(prompt())}>Добавить клиента</button>
            <button onClick={onAddManyCustomersHandle}>Получить клиентов из базы</button>
            <button onClick={onCallSagaHandle}>Вызвать Redux-Saga</button>
            <button onClick={onFetchManyCustomersHandle}
            >
                Добавить пользователей с помощью Redux-Saga
            </button>
            <button onClick={onCallSagaDecrementHandle}>Взять кеш с помощью Saga</button>
            <div>{users?.map(user => {
                return <div key={user?.id}>
                    {user?.id}
                    <div>{user?.name}</div>
                </div>
            })}</div>
            {customers.length > 0 ? <div>{customers.map(customer => {
                return <div
                    key={customer?.id}
                >
                    {customer?.name}
                    <button onClick={() => onRemoveCustomerHandle(customer?.id)}
                    >
                        Удалить клиента
                    </button>
                </div>
            })}</div> : <div>Клиенты отсутвуют</div>}
        </div>);
};

export default App;