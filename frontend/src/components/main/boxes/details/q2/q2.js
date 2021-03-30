import React, { Component } from 'react';
import './q2.css'

export default class Q2 extends Component {
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
            <div className="q2">
                <form className="q2-form">
                    <div className="q2-inner">
                        Q2
                        <div className="q2-input">
                            {this.props.impressions}
                        </div>
                        <div className="q2-input">
                            {this.props.clicks}
                        </div>
                        <div className="q2-input">
                            {this.props.cpc}
                        </div>
                        <div className="q2-input">
                            {this.props.ctr}
                        </div>
                        <div className="q2-input">
                            {this.props.advertising_spend}
                        </div>
                        <div className="q2-input">
                            {this.props.acos}
                        </div>
                        <div className="q2-input">
                            {this.props.advertising_order}
                        </div>
                        <div className="q2-input">
                            {this.props.total_units}
                        </div>
                        <div className="q2-input">
                            {this.props.total_sales}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}