import { config } from './config'

export const fetchCustom = (url: string, params: RequestInit = {} as any) => fetch(`https://${config.host}:${config.port}${url}`, {
    ...params,
    headers: {
        ...params.headers,
        // @ts-ignore
        token: localStorage.getItem('token')
    }
})