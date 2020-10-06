import React, { useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import './ListUsers.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { useSelector, useDispatch } from 'react-redux'
import { selectUsers, deleteUser } from '../redux/usersSlice'

import UserInfo from './UserInfo'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftList: {
      width: '100%',
      height: '93vh',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      borderRight: '3px solid grey',
    },
  })
)

export default function ListUsers() {
  const [userPage, setUserPage] = useState({
    id: '',
    name: '',
    mail: '',
    phone: '',
    vehNum: '',
    status: true,
    photo: '',
  })

  const classes = useStyles()
  const usersList = useSelector(selectUsers)

  return (
    <div style={{ display: 'flex' }}>
      <div className={classes.leftList}>
        <List>
          {usersList.map(user => (
            <ListItem
              button
              divider={true}
              // style={{ border: '1px solid orange' }}
              onClick={() =>
                setUserPage({
                  id: user.id,
                  name: user.name,
                  mail: user.mail,
                  phone: user.phone,
                  vehNum: user.vehNum,
                  status: user.status,
                  photo: user.photo,
                })
              }
              selected={userPage.id === user.id ? true : false}
            >
              <ListItemText
                primary={user.name}
              // style={{ border: '1px solid red' }}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className='main-block'>
        <UserInfo
          photo={userPage.photo}
          name={userPage.name}
          mail={userPage.mail}
          phone={userPage.phone}
          vehNum={userPage.vehNum}
          status={userPage.status}
          id={userPage.id}
        />
      </div>
    </div>
  )
}

console.log('test')
