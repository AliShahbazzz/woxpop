import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Projected from './projected';
import Potential from './potential';
import './details.css'


const names = [
    'no_of_skus',
    'impressions',
    'clicks',
    'cpc',
    'ctr',
    'advertising_spend',
    'acos',
    'advertising_order',
    'total_units',
    'total_sales',
]
const Cnames = [
    'Number of SKU(s)',
    'Impressions',
    'Clicks',
    'CPC',
    'CTR',
    'Spend on Advertising',
    'ACoS',
    'Orders via Advertising',
    'Total Units Sold via (Ads + Organic)',
    'Total Sales Revenue (Ads + Organic)',
]

const placeholders = [
    '15',
    '12450',
    '3540',
    '0.60',
    '0.35',
    '5000',
    '50',
    '500',
    '1000',
    '10000',
]

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#ffffff",
        color: "#242424",
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
class Details extends Component {

    constructor(props) {
        super(props);
        this.child1 = React.createRef();
        this.child2 = React.createRef();
        this.state = {
            showResult: false,
            values: {
                no_of_skus: '',
                impressions: '',
                clicks: '',
                cpc: '',
                ctr: '',
                advertising_spend: '',
                acos: '',
                advertising_order: '',
                total_units: '',
                total_sales: ''
            }
        }
    }
    resValues(res) {
        this.setState({
            showResult: true
        })
        this.child1.current.resValues1(res)
        this.resValues2(res)
    }
    resValues2(res) {
        this.child2.current.resValues2(res)
    }

    onChange = (field, e) => {
        let val = e.target.value;
        let curVal = this.state.values;
        curVal[field] = val;

        this.setState({
            values: curVal
        }, () => this.props.updateSection(field, val));
    }

    render() {
        let result = <><Projected ref={this.child1} /><Potential ref={this.child2} /></>
        return (
            <div className="details">
                <TableContainer className={this.state.showResult ? '' : 'MuiTableContainer-root-custom'} component={Paper} >
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center" >
                                    <span className="details-heading">
                                        <b>Reached</b>
                                    </span>
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell
                                    align="center"
                                ><b>Quarter 1<br />Jan 2021 - Mar 2021</b></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {names.map((row) => (
                                this.state.showResult ? (
                                    row !== 'no_of_skus' ?
                                        <StyledTableRow key={row}>
                                            <StyledTableCell align="center">
                                                <div className="details-inputs">
                                                    <span className="details-input-span" >
                                                        {Cnames[names.indexOf(row)]}
                                                    </span>
                                                    <Input
                                                        className="details-input"
                                                        style={{ "width": "50%" }}
                                                        placeholder={placeholders[names.indexOf(row)]}
                                                        disabled={this.state.showResult}
                                                        required
                                                        id={row}
                                                        key={row}
                                                        type="number"
                                                        onChange={(e) => this.onChange(row, e)}
                                                    />
                                                </div>
                                            </StyledTableCell>
                                        </StyledTableRow> : null) :
                                    <StyledTableRow key={row}>
                                        <StyledTableCell align="center">
                                            <div className="details-inputs">
                                                <span className="details-input-span" >
                                                    {Cnames[names.indexOf(row)]}
                                                </span>
                                                <Input
                                                    className="details-input"
                                                    style={{ "width": "50%" }}
                                                    placeholder={placeholders[names.indexOf(row)]}
                                                    required
                                                    id={row}
                                                    key={row}
                                                    type="number"
                                                    onChange={(e) => this.onChange(row, e)}
                                                />
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
                {this.state.showResult ?
                    result
                    : null}
            </div>
        );
    }
}

export default Details;