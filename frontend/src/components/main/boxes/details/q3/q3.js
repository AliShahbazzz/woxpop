import React, { Component } from 'react';
import './q3.css'

export default class Q3 extends Component {
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
            <div className="q3">
                <form className="q3-form">
                    <div className="q3-inner">
                        Q3
                        <div className="q3-input">
                            {this.props.impressions}
                        </div>
                        <div className="q3-input">
                            {this.props.clicks}
                        </div>
                        <div className="q3-input">
                            {this.props.cpc}
                        </div>
                        <div className="q3-input">
                            {this.props.ctr}
                        </div>
                        <div className="q3-input">
                            {this.props.advertising_spend}
                        </div>
                        <div className="q3-input">
                            {this.props.acos}
                        </div>
                        <div className="q3-input">
                            {this.props.advertising_order}
                        </div>
                        <div className="q3-input">
                            {this.props.total_units}
                        </div>
                        <div className="q3-input">
                            {this.props.total_sales}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}