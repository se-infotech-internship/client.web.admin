import { SET_USER, LOGOUT, GET_USERS, Actions, setUser, getUsersAction } from '../actions';
import { AppDispatch } from '../store';

// import axios from 'axios';


const initialState = {
    isAuth: false,
    usersBase: []
}

export default function userReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                isAuth: false
            }
        case GET_USERS:
            return {
                ...state,
                usersBase: action.payload
            }
        default:
            return state;
    }
}


export const login = (email: string, password: string) => {
    const body = JSON.stringify({ email, password });

    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch('http://localhost:5001/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: body,
            })
            const result = await response.json();

            if (result.token !== undefined) {
                localStorage.setItem('token', result.token);
                dispatch(setUser());
            }

        } catch (error) {
            console.log(error);
        }
    }
}


export const getUsers = () => async (dispatch: AppDispatch) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const result = await response.json();
        console.log(result)
        dispatch(getUsersAction(result));
    } catch (error) {
        console.log(error)
    }
};
