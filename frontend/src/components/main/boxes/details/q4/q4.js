import React, { Component } from 'react';
import './q4.css'

export default class Q4 extends Component {
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

    render() {
        return (
            <div className="q4">
                <form className="q4-form">
                    <div className="q4-inner">
                        Q4
                        <div className="q4-input">
                            {this.props.impressions}
                        </div>
                        <div className="q4-input">
                            {this.props.clicks}
                        </div>
                        <div className="q4-input">
                            {this.props.cpc}
                        </div>
                        <div className="q4-input">
                            {this.props.ctr}
                        </div>
                        <div className="q4-input">
                            {this.props.advertising_spend}
                        </div>
                        <div className="q4-input">
                            {this.props.acos}
                        </div>
                        <div className="q4-input">
                            {this.props.advertising_order}
                        </div>
                        <div className="q4-input">
                            {this.props.total_units}
                        </div>
                        <div className="q4-input">
                            {this.props.total_sales}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}