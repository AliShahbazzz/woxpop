import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const names = [
    'impressions',
    'clicks',
    'cpc',
    'ctr',
    'advertising_spend',
    'acos',
    'advertising_order',
    'total_units',
    'total_sales',
    'total'
]

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#3498db",
        color: "#000000",
    },
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

export default class Projected extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                impressions: { Q2: 0, Q3: 0, Q4: 0 },
                clicks: { Q2: 0, Q3: 0, Q4: 0 },
                cpc: { Q2: 0, Q3: 0, Q4: 0 },
                ctr: { Q2: 0, Q3: 0, Q4: 0 },
                advertising_spend: { Q2: 0, Q3: 0, Q4: 0 },
                acos: { Q2: 0, Q3: 0, Q4: 0 },
                advertising_order: { Q2: 0, Q3: 0, Q4: 0 },
                total_units: { Q2: 0, Q3: 0, Q4: 0 },
                total_sales: { Q2: 0, Q3: 0, Q4: 0 },
                total: 0
            }
        }
    }
    resValues1(res) {
        let val = this.state.values
        for (let i = 0; i <= 8; i++) {
            let newVal = res[names[i]].projected
            val[names[i]] = newVal
            this.setState({ values: val })
        }
        val['total'] = val['total_sales'].Q2 + val['total_sales'].Q3 + val['total_sales'].Q4
        this.setState({ values: val })
    }

    render() {
        return (
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell colSpan={3} align="center" >
                                <span style={{ 'fontSize': '20px' }}>
                                    <b>Projected</b>
                                </span>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell className="projected-head" align="right" ><b>Q2</b></StyledTableCell>
                            <StyledTableCell className="projected-head" align="right" ><b>Q3</b></StyledTableCell>
                            <StyledTableCell className="projected-head" align="right" ><b>Q4</b></StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody className="projected-body">
                        {names.map((row) => (
                            row !== 'total' ?
                                <StyledTableRow key={row}>
                                    <StyledTableCell align="right">{this.state.values[row].Q2}</StyledTableCell>
                                    <StyledTableCell align="right">{this.state.values[row].Q3}</StyledTableCell>
                                    <StyledTableCell align="right">{this.state.values[row].Q4}</StyledTableCell>
                                </StyledTableRow> :
                                <StyledTableRow key={row}>
                                    <StyledTableCell align="right">Total: </StyledTableCell>
                                    <StyledTableCell align="right" className="details-total">{this.state.values[row]}</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        );
    }
}