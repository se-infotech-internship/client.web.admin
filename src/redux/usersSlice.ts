import { RecentActorsSharp } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

let fakeUsers = [
  {
    id: '123',
    name: 'Louis N. Thomas',
    mail: 'thomas@gmail.com',
    phone: '+380934562312',
    vehNum: 'AA 94534 KK',
    status: true,
    photo: 'https://bold.textcontrol.com/images/authors/Bjoern%20Meyer.jpg',
  },
  {
    id: '456',
    name: 'Martina L. Maynes',
    mail: 'martin@gmail.com',
    phone: '+380354562185',
    vehNum: 'HA 18426 TH',
    status: false,
    photo:
      'https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372_960_720.jpg',
  },
]

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: fakeUsers,
  },
  reducers: {
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload)
    },
    changeStatus: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload) {
          return { ...user, status: !user.status }
        }
        return user
      })
    },
  },
})

export const { deleteUser, changeStatus } = usersSlice.actions

export const selectUsers = (state: RootState) => state.value

export default usersSlice.reducer
