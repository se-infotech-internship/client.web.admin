import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { rowsUsers } from '../../redux/reducers/userReducer'

import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        width: '79%',
        // height: '50vh',
        margin: '10px auto'
    },
    listItems_wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        width: '30%',
        margin: 10,
        borderRadius: 5
    },
    head_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid green'
    },
    buttons_div: {
        display: 'flex',
        // border: '1px solid red'
    },
    blockDelete_buttons: {
        margin: 10,
        // border: '1px solid orange'
    },
    bottom_block: {
        textAlign: 'center',
        marginTop: 20,
        // border: '1px solid'
    },
    submit_button: {
        margin: 10,
        // marginLeft: 650
    },
    textField: {
        width: '60%'
    }
})


export default function CardUser() {
    const classes = useStyles()
    let history = useHistory()

    const [message, setMessage] = useState('')

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked })
        blockUser(userId)
    }


    const users = useSelector((state: RootState) => state.users.rowsUsers)
    const userId = useSelector((state: RootState) => state.users.cardUserId)
    const selectUser: rowsUsers[] = users.filter(user => user.id === userId)

    const nameUser = selectUser.map(user => user.name)
    const secondNameUser = selectUser.map(user => user.secondName)
    // console.log(selectUser)

    let userInfo = selectUser.map((user: rowsUsers) => (
        <Card className={classes.root} variant="outlined" key={user.id}>
            <div className={classes.listItems_wrapper}>
                <div className={classes.listItem}>
                    <ListItem>
                        <ListItemText primary={user.middleName} secondary={`по батькові`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={user.phone} secondary={`телефон`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={user.email} secondary={`email`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={user.blocked ? "заблокований" : "активований"} secondary={`аккаунт`} />
                    </ListItem>
                </div >
                <div className={classes.listItem}>
                    <ListItem>
                        <ListItemText primary={'інформація відсутня'} secondary={`номер тз`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={user.TZVIN} secondary={`TZVIN`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={user.distToCam + ` метрів`} secondary={`дистанція до камери`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={user.TZVIN} secondary={`TZVIN`} />
                    </ListItem>
                </div>
            </div>
        </Card>
    ))



    const blockUser = async (userId: string) => {
        try {
            // console.log(`${page} ${rows}`)
            const response = await fetch(`http://localhost:5001/api/admin/block/${userId}`, {
                //@ts-ignore   
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            // const result = await response.json()
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    const deleteUser = async (userId: string) => {
        try {
            // console.log(`${page} ${rows}`)
            const response = await fetch(`http://localhost:5001/api/admin/delete/${userId}`, {
                method: 'DELETE',
                //@ts-ignore   
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            history.push("/home")
            // const result = await response.json()
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    function handleChangeMessage(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (message !== '') {
            // personalMessage(message)
            console.log(message)
            setMessage('')
        }
    }


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.head_wrapper}>
                    <div>
                        <Typography variant="h2" gutterBottom={true}>{nameUser} {secondNameUser}</Typography>
                    </div>
                    <div className={classes.buttons_div} >
                        <div className={classes.blockDelete_buttons}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label={state.checkedB ? "Активований" : "Заблокований"}
                            />
                        </div>
                        <div className={classes.blockDelete_buttons}>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={() => deleteUser(userId)}
                            >
                                Видалити
                            </Button>
                        </div>
                    </div>
                </div>
                <List>
                    <div>
                        {userInfo}
                    </div>
                    <div className={classes.bottom_block}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Написати повідомлення"
                                multiline
                                rows={10}
                                size="medium"
                                variant="outlined"
                                className={classes.textField}
                                onChange={handleChangeMessage}
                            />
                            <div className={classes.submit_button}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Надіслати
                                </Button>
                            </div>
                        </form>
                    </div>
                </List>
            </CardContent>
        </Card>
    )
}


/*
   const {
       TZLicence,
       TZNumber,
       TZVIN,
       appPaymentReminder,
       blocked,
       camAutoFind,
       confirmed,
       createdAt,
       distToCam,
       distanceToCam,
       driverLicence,
       email,
       emailNotifications,
       finesAutoCheck,
       finesPaymentAutoCheck,
       id,
       isAdmin,
       maxSpeedNotifications,
       middleName,
       name,
       password,
       phone,
       pushNotifications,
       rememberPassword,
       secondName,
       sound,
       turnOnApp,
       updatedAt,
       voiceNotifications,
   } = selectUser[0]
  */