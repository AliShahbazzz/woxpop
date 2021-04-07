import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import StoreIcon from '@material-ui/icons/Store';
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
                        {/* <div>
                            <div className="name-text-1">
                                Let us help you
                                </div><br />
                                <div className="name-text-2">
                                Learn how much more money your Product Listings can (and should)<br /> be earning You... Every Month, Every Quarter, and Every YEAR!
                            </div>
                        </div> */}
                        <div className="name-inputs">
                            <TextField
                                className="name-input"
                                required
                                label="Name"
                                id="Name"
                                value={this.state.values.name}
                                onChange={(e) => this.onChange('name', e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="name-inputs">
                            <TextField
                                className="name-input"
                                required
                                label="E-mail Address"
                                id="E-mail Address"
                                value={this.state.values.email}
                                onChange={(e) => this.onChange('email', e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="name-inputs">
                            <TextField
                                className="name-input"
                                required
                                label="Storefront / ASIN"
                                id="Storefront / ASIN"
                                value={this.state.values.storefront}
                                onChange={(e) => this.onChange('storefront', e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StoreIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Name;