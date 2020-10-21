import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'
import { logout } from '../redux/reducers/userReducer'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        component_link: {
            textDecoration: 'none',
            color: 'white'
        },
    }),
)



export default function TopBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        searchUsers(search)
        console.log(search)
    }


    const searchUsers = async (search: string) => {
        try {
            // console.log(`${page} ${rows}`)
            const response = await fetch(`http://localhost:5001/api/admin/users/?page=1&quantity=1&phone=${search}`, {
                //@ts-ignore
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            const result = await response.json()
            console.log(result.rows[0]) // искомый юзер

            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }




    function handleClick() {
        localStorage.removeItem('token')
        dispatch(logout())
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/home" className={classes.component_link}>Панель адміністратора</Link>
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <InputBase
                                placeholder="Пошук…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                value={search}
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                    <div style={{ marginLeft: "62.5%" }}>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleClick}
                        >
                            Вийти
                         </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    )
}
