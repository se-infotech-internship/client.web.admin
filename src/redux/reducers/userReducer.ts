import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export type rowsUsers = {
    TZLicence: null  /* уточнить тип */
    TZNumber: null  /* уточнить тип */
    TZVIN: string
    appPaymentReminder: boolean
    blocked: boolean
    camAutoFind: boolean
    confirmed: boolean
    createdAt: string
    distToCam: string
    distanceToCam: boolean
    driverLicence: null  /* уточнить тип */
    email: string
    emailNotifications: boolean
    finesAutoCheck: boolean
    finesPaymentAutoCheck: boolean
    id: string
    isAdmin: boolean
    maxSpeedNotifications: boolean
    middleName: string
    name: string
    password: string
    phone: string
    pushNotifications: boolean
    rememberPassword: boolean
    secondName: string
    sound: boolean
    turnOnApp: boolean
    updatedAt: string
    voiceNotifications: boolean
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        countUsers: 0,
        rowsUsers: [] as rowsUsers[],
        cardUser: ''
    },
    reducers: {
        authUser: state => {
            state.isAuth = true
        },
        logout: state => {
            state.isAuth = false
        },
        fetchCountUsers: (state, action) => {
            state.countUsers = action.payload
        },
        fetchRowsUsers: (state, action) => {
            state.rowsUsers = action.payload
        },
        clickUser: (state, action) => {
            state.cardUser = action.payload
        }
    }
})

export const { authUser, logout, fetchRowsUsers, fetchCountUsers, clickUser } = usersSlice.actions



export const login = (email: string, password: string) => {
    const body = JSON.stringify({ email, password })

    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch('http://localhost:5001/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: body,
            })
            const result = await response.json()

            if (result.token !== undefined) {
                localStorage.setItem('token', result.token)
                dispatch(authUser())
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const getUsers = (page: number, rows: number) => async (dispatch: AppDispatch) => {
    try {
        // console.log(`${page} ${rows}`)
        const response = await fetch(`http://localhost:5001/api/admin/users/?page=${page}&quantity=${rows}`)
        const result = await response.json()

        dispatch(fetchCountUsers(result.count))
        dispatch(fetchRowsUsers(result.rows))
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}



export default usersSlice.reducer





/*  правки


// Создать отдельные файлы
const config = {
    host: "13",
    port: 8080
};

const fetchCustom = (url: string, params: RequestInit = {} as any) => fetch(`https://${config.host}:${config.port}${url}`, {
    ...params,
    headers: {
        ...params.headers,
        //@ts-ignore
        token: localStorage.getItem('token')
    }
});




export const getUsers = (page: number, rows: number) => async (dispatch: AppDispatch) => {
    try {
        // console.log(`${page} ${rows}`)
        const response = await fetchCustom(`/api/admin/users/?page=${page}&quantity=${rows}`);
        const result = await response.json()

        dispatch(fetchCountUsers(result.count))
        dispatch(fetchRowsUsers(result.rows))
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
};



export default usersSlice.reducer



*/