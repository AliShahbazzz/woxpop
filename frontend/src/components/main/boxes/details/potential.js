import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    // head: {
    //     backgroundColor: theme.palette.common.black,
    //     color: theme.palette.common.white,
    // },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, q2, q3, q4) {
    return { name, q2, q3, q4 };
}

const rows = [
    createData('impressions', 6.0, 24, 4.0),
    createData('clicks', 9.0, 37, 4.3),
    createData('cpc', 16.0, 24, 6.0),
    createData('ctr', 3.7, 67, 4.3),
    createData('advertising_spend', 16.0, 49, 3.9),
    createData('acos', 9.0, 37, 4.3),
    createData('advertising_order', 16.0, 24, 6.0),
    createData('total_units', 3.7, 67, 4.3),
    createData('total_sales', 16.0, 49, 3.9),
];

export default class Potential extends Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow><b>Potential</b></TableRow>
                        <TableRow>
                            <StyledTableCell align="right"><b>Q2</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Q3</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Q4</b></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">{row.q2}</StyledTableCell>
                                <StyledTableCell align="right">{row.q3}</StyledTableCell>
                                <StyledTableCell align="right">{row.q4}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
