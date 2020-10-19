import React from 'react'
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
import { RootState } from '../redux/store'
import { getUsers, clickUser } from '../redux/reducers/userReducer'

import { Link } from 'react-router-dom'

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
];


const useStyles = makeStyles({
    root: {
        width: '80%',
    },
    container: {
        maxHeight: '100vh', // default height 440px
    },
});

export default function TableUsers() {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)


    const rows = useSelector((state: RootState) => state.users.rowsUsers)
    const countState = useSelector((state: RootState) => state.users.countUsers)
    // console.log(`${countState} this is test`)
    // console.log(`${rows} this is test`)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getUsers(page + 1, rowsPerPage))
    }, [page, rowsPerPage])



    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
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
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => console.log(row.email)}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} onClick={() => dispatch(clickUser(row.id))}>
                                                <Link to="/user"  >
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </Link>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
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
    );
}
