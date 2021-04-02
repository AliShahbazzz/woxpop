import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Projected from './projected';
import Potential from './potential';
import './details.css'


const names = [
    'impressions',
    'clicks',
    'cpc',
    'ctr',
    'advertising_spend',
    'acos',
    'advertising_order',
    'total_units',
    'total_sales'
]
const Cnames = [
    'Impressions',
    'Clicks',
    'CPC',
    'CTR %',
    'Advertising Spend',
    'ACoS %',
    'Advertising order',
    'Total Units (Ads + Non Ads)',
    'Total Sales (Ads + Non Ads)'
]

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
class Details extends Component {
    componentWillReceiveProps(props) {
        this.setState({ result: props.result });
    }

    constructor(props) {
        super(props);
        this.child1 = React.createRef();
        this.child2 = React.createRef();
        this.state = {
            result: this.props.result,
            values: {
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
        return (
            <div className="details">
                {/* <form className="details-form">
                        <div className="details-inner">
                        <b>Current</b>
                        <div className="details-heading">
                            Q1
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Impressions"
                                onChange={(e) => this.onChange('impressions', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Clicks"
                                onChange={(e) => this.onChange('clicks', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="CPC"
                                onChange={(e) => this.onChange('cpc', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="CTR %"
                                onChange={(e) => this.onChange('ctr', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Advertising Spend"
                                onChange={(e) => this.onChange('advertising_spend', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="ACoS %"
                                onChange={(e) => this.onChange('acos', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Advertising Orders"
                                onChange={(e) => this.onChange('advertising_order', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Total Units (Ads + Non Ads)"
                                onChange={(e) => this.onChange('total_units', e)} />
                        </div>
                        <div className="details-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Total Sales (Ads + Non Ads)"
                                onChange={(e) => this.onChange('total_sales', e)} />
                        </div>
                    </div> */}

                <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center" fontSize='22px' >
                                    <b>Current</b>
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow style={{ 'fontSize ': '18px' }}>
                                <StyledTableCell align="center">Q1</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {names.map((row) => (
                                <StyledTableRow key={row}>
                                    <StyledTableCell align="center">
                                        <div className="details-input">
                                            {row}
                                            <input
                                                required
                                                id="standard-basic"
                                                onChange={(e) => this.onChange(row, e)} />
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
                {/* </form> */}
                <Projected ref={this.child1} />
                <Potential ref={this.child2} />
            </div>
        );
    }
}

export default Details;