import React, { Component } from 'react';
import Name from './boxes/name/name';
import Info from './boxes/info/info';
import Details from './boxes/details/details';
//import axios from 'axios';
import './main.css';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currBox: 0,
            values: {
                id: '',
                name: '',
                email: '',
                storefront: '',
                marketplace: '',
                category: '',
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
            },
        }
        this.arr = [
            <Name master={this.state.values} updateSection={(field, val) => this.updateSection(field, val)} />,
            <Info master={this.state.values} updateSection={(field, val) => this.updateSection(field, val)} />,
            <Details master={this.state.values} updateSection={(field, val) => this.updateSection(field, val)} />
        ];
    }

    onClick = (field, e) => {
        if (field === 'back') {
            this.setState({
                currBox: this.state.currBox === 0 ? this.state.currBox : this.state.currBox - 1
            });
        } else {
            if (this.state.currBox === 0) {
                this.setState({
                    currBox: this.state.currBox + 1
                });
            } else if (this.state.currBox === 1) {
                this.setState({
                    currBox: this.state.currBox + 1
                });
            } else if (this.state.currBox === 2) {
                return null
            }
        }
    }

    updateSection = (field, val) => {
        let currVal = this.state.values
        currVal[field] = val
        this.setState({
            values: currVal
        });
    }

    renderBox = () => {
        return this.arr[this.state.currBox]
    }

    // onSubmit = (x) => {
    //     if (x === 0) {
    //         axios.post()
    //     } else if (x === 1) {

    //     } else if (x === 2) {

    //     }
    // }

    render() {
        return (
            <div className="main">
                Projection Calculator
                {this.renderBox()}
                <button onClick={(e) => this.onClick('back', e)}>Back</button>
                <button onClick={(e) => this.onClick('next', e)}>{this.state.currBox === 2 ? 'Submit' : 'Next'}</button>
            </div>
        )
    }
}