import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './name.css';

class Name extends Component {

    componentWillReceiveProps(props) {
        this.setState({ values: props.master })
    }

    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: props.master.name,
                email: props.master.email,
                storefront: props.master.storefront
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
            <div className="name">
                <form className="name-form">
                    <div className="name-inner">
                        <div className="name-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Name"
                                value={this.state.values.name}
                                onChange={(e) => this.onChange('name', e)} />
                        </div>
                        <div className="name-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="E-mail Address"
                                value={this.state.values.email}
                                onChange={(e) => this.onChange('email', e)} />
                        </div>
                        <div className="name-input">
                            <TextField
                                required
                                id="standard-basic"
                                label="Storefront / ASIN"
                                value={this.state.values.storefront}
                                onChange={(e) => this.onChange('storefront', e)} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Name;