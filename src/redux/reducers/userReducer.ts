import { createSlice } from '@reduxjs/toolkit'


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
        cardUserId: '',
        searchUsers: [] as rowsUsers[]
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
            state.cardUserId = action.payload
        },
        fetchSearchUsers: (state, action) => {
            state.searchUsers = action.payload
        }
    }
})

export const { authUser, logout, fetchRowsUsers, fetchCountUsers, clickUser, fetchSearchUsers } = usersSlice.actions


export default usersSlice.reducer





