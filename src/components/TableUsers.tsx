import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const fakeUsers = [
    {
        id: '123', name: 'Louis N. Thomas', mail: 'thomas@gmail.com', phone: '+380934562312', vehNum: 'AA 94534 KK', status: true,

    },
    {
        id: '456', name: 'Martina L. Maynes', mail: 'martin@gmail.com', phone: '+380354562185', vehNum: 'HA 18426 TH', status: true,
    },
]

export default function TableUsers() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ім'я</TableCell>
                        <TableCell >Номер ТЗ</TableCell>
                        <TableCell >Телефон користувача</TableCell>
                        <TableCell >Статус</TableCell>
                        <TableCell >Email</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {fakeUsers.map((fakeUser) => (
                        <TableRow onClick={() => console.log(fakeUser.name)} key={fakeUser.id}>
                            <TableCell >{fakeUser.name}</TableCell>
                            <TableCell >{fakeUser.vehNum}</TableCell>
                            <TableCell >{fakeUser.phone}</TableCell>
                            <TableCell >{fakeUser.status ? 'Активований' : 'Заблокований'}</TableCell>
                            <TableCell >{fakeUser.mail}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
