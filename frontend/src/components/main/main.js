import React, { Component } from 'react';
import Name from './boxes/name/name';
import Info from './boxes/info/info';
import Details from './boxes/details/details';
import axios from 'axios';
import './main.css';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            currBox: 0,
            result: '',
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
    }

    onClick = (field, e) => {
        if (field === 'back') {
            this.setState({
                currBox: this.state.currBox === 0 ? this.state.currBox : this.state.currBox - 1
            });
        } else {
            if (this.state.currBox === 0) {
                this.onSubmit(0)
                this.setState({
                    currBox: this.state.currBox + 1
                });
            } else if (this.state.currBox === 1) {
                this.onSubmit(1)
                this.setState({
                    currBox: this.state.currBox + 1
                });
            } else if (this.state.currBox === 2) {
                this.onSubmit(2)
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
        let arr = [
            <Name master={this.state.values} updateSection={(field, val) => this.updateSection(field, val)} />,
            <Info master={this.state.values} updateSection={(field, val) => this.updateSection(field, val)} />,
            <Details ref={this.child} result={this.state.result} updateSection={(field, val) => this.updateSection(field, val)} />
        ];
        return arr[this.state.currBox]
    }

    onSubmit = (x) => {
        if (x === 0) {
            axios.post('http://localhost:5000/api/home/',
                {
                    name: this.state.values.name,
                    email: this.state.values.email,
                    storefront: this.state.values.storefront,
                })
                .then((res) => {
                    let val = this.state.values
                    val['id'] = res.data.id
                    this.setState({
                        values: val
                    })
                    console.log(res.data)
                })
                .catch((err) => console.log(err))
        } else if (x === 1) {
            axios.post('http://localhost:5000/api/home/addOptional/',
                {
                    id: this.state.values.id,
                    marketplace: this.state.values.marketplace,
                    category: this.state.values.category,
                    no_of_skus: this.state.values.no_of_skus,
                })
                .then((res) => {
                    let val = this.state.values
                    val['id'] = res.data.id
                    this.setState({
                        values: val
                    })
                    console.log(res.data)
                })
                .catch((err) => console.log(err))
        } else if (x === 2) {
            axios.post('http://localhost:5000/api/home/addDetails/',
                {
                    id: this.state.values.id,
                    impressions: this.state.values.impressions,
                    clicks: this.state.values.clicks,
                    cpc: this.state.values.cpc,
                    ctr: this.state.values.ctr,
                    advertising_spend: this.state.values.advertising_spend,
                    acos: this.state.values.acos,
                    advertising_order: this.state.values.advertising_order,
                    total_units: this.state.values.total_units,
                    total_sales: this.state.values.total_sales
                })
                .then((res) => {
                    this.setState({
                        result: res.data.result
                    }, this.child.current.resValues(res.data.result))
                    console.log(res.data.result)
                })
                .catch((err) => console.log(err))
        }
    }

    render() {
        let val = this.state.values
        return (
            <div className="main">
                Projection Calculator
                {this.renderBox()}
                <button
                    disabled={this.state.currBox === 0}
                    onClick={(e) => this.onClick('back', e)}>
                    Back
                </button>
                <button
                    disabled={val.name === '' || val.email === '' || val.storefront === ''}
                    type='submit'
                    onClick={(e) => this.onClick('next', e)}>
                    {this.state.currBox === 2 ? 'Calculate' : 'Next'}
                </button>
            </div>
        )
    }
}