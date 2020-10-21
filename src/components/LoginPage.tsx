import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { authUser } from '../redux/reducers/userReducer'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        SmartRadar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))



export default function LoginPage() {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const dispatch = useDispatch()


  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email !== '' && password !== '') {
      dispatch(login(email, password))
      setEmail('')
      setPassword('')
      // console.log(`${email} ${password}`)
    }
  }

  const login = (email: string, password: string) => {
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
        } else {
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleFocus = () => {
    setIsError(false)
  }


  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Smart Radar
        </Typography>
        <form
          className={classes.form}
          // noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            // autoComplete='email'
            autoFocus
            onFocus={handleFocus}
            value={email}
            onChange={handleEmail}
            error={isError}
            helperText={isError ? 'Логін або пароль неправильні' : ''}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            // autoComplete='current-password'
            value={password}
            onChange={handlePassword}
            error={isError}
            helperText={isError ? 'Логін або пароль неправильні' : ''}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Увійти
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
