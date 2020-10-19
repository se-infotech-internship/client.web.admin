import React from 'react'
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


const useStyles = makeStyles({
    root: {
        width: '79%',
        // height: '50vh',
        margin: '10px auto'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardUser() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }

    const bull = <span className={classes.bullet}>•</span>

    const users = useSelector((state: RootState) => state.users.rowsUsers)
    const userId = useSelector((state: RootState) => state.users.cardUser)
    const selectUser: rowsUsers[] = users.filter(user => user.id === userId)

    const nameUser = selectUser.map(user => user.name)
    const secondNameUser = selectUser.map(user => user.secondName)
    // console.log(selectUser)

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

    let userInfo = selectUser.map((user: rowsUsers) => (
        <Card className={classes.root} variant="outlined">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '30%', margin: 10, borderRadius: 5 }}>
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
                <div style={{ width: '30%', margin: 10, borderRadius: 5 }}>
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

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', /*border: '1px solid green' */ }}>
                    <div>
                        <Typography variant="h2" gutterBottom={true}>{nameUser} {secondNameUser}</Typography>
                    </div>
                    <div style={{ display: 'flex',  /* border: '1px solid red' */ }} >
                        <div style={{ margin: 10 }}>
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
                        <div style={{ margin: 10 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                            >
                                Видалити
                            </Button>
                        </div>
                    </div>
                </div>
                <List>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
                        {userInfo}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 20 }}>
                        <form>
                            <TextField
                                id="outlined-multiline-static"
                                label="Написати повідомлення"
                                multiline
                                rows={10}
                                size="medium"
                                variant="outlined"
                                style={{ width: '60%' }}
                            />
                            <div style={{ margin: 10, marginLeft: 650 }}>
                                <Button variant="contained" color="primary">
                                    Надіслати
                                </Button>
                            </div>
                        </form>
                    </div>
                </List>
            </CardContent>
        </Card>
    );
}
