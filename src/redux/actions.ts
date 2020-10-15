export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

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

export type Actions = ReturnType<typeof setUser> | ReturnType<typeof logout>;