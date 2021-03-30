import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Projected from './projected';
import Potential from './potential';
import './details.css'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <form className="details-form">
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
                    </div>
                </form>
                <Projected />
                <Potential />
            </div>
        );
    }
}

export default Details;