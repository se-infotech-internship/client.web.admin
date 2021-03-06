import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../redux/store'
import { fetchRowsUsers, fetchCountUsers, clickUser } from '../../redux/reducers/userReducer'

import { Link, useHistory } from 'react-router-dom'

interface Column {
    id: 'name' | 'secondName' | 'email' | 'phone';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: `Ім'я`, minWidth: 170 },
    { id: 'secondName', label: 'Призвище', minWidth: 170 },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'phone',
        label: 'Телефон',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
]


const useStyles = makeStyles({
    root: {
        width: '80%',
    },
    container: {
        maxHeight: '100vh', // default height 440px
    },
})



export default function SearchTable() {
    const classes = useStyles()
    let history = useHistory()
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)


    const rows = useSelector((state: RootState) => state.users.searchUsers)
    const countState = useSelector((state: RootState) => state.users.countUsers)

    // console.log(rows)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers(page + 1, rowsPerPage))
    }, [page, rowsPerPage])

    const getUsers = (page: number, rows: number) => async (dispatch: AppDispatch) => {
        try {
            // console.log(`${page} ${rows}`)
            const response = await fetch(`http://localhost:5001/api/admin/users/?page=${page}&quantity=${rows}`)
            const result = await response.json()

            dispatch(fetchCountUsers(result.count))
            dispatch(fetchRowsUsers(result.rows))
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }


    function handleClickUser(id: string) {
        dispatch(clickUser(id))
    }

    function toUserPage() {
        history.push("/user")
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={toUserPage} style={{ cursor: 'pointer' }}>
                                    {columns.map((column) => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell key={column.id} align={column.align} onClick={() => handleClickUser(row.id)}>
                                                <Link to="/user" style={{ textDecoration: 'none', color: 'grey' }} >
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </Link>
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={countState}  // сюда передать count из ридакс
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
