export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const GET_USERS = 'GET_USERS';

export function setUser() {
    return {
        type: SET_USER,
    } as const;
}

export function logout() {
    return {
        type: LOGOUT,
    } as const;
}



export interface IUsers {
    id: number
    name: string
    userName: string
    email: string
    phone: string
}

export function getUsersAction(users: IUsers) {
    return {
        type: GET_USERS,
        payload: users
    } as const;
}

export type Actions = ReturnType<typeof setUser> | ReturnType<typeof logout> | ReturnType<typeof getUsersAction>;