import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CategoryIcon from '@material-ui/icons/Category';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InputAdornment from '@material-ui/core/InputAdornment';
import './info.css'

class Info extends Component {

    componentWillReceiveProps(props) {
        this.setState({ values: props.master })
    }

    constructor(props) {
        super(props);
        this.state = {
            values: {
                marketplace: props.master.marketplace,
                category: props.master.category,
                no_of_skus: props.master.no_of_skus,
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
            <div className="info">
                <form className="info-form">
                    <div className="info-inner">
                        <div>
                            <div className="name-text-1">
                                Get Free Access to Projection Calculator
                                </div><br />
                            <div className="name-text-2">
                                Learn how much more money your Product Listings can (and should)<br /> be earning You... Every Month, Every Quarter, and Every YEAR!
                        </div>
                        </div>
                        <div className="info-input">
                            <TextField
                                placeholder="(Optional)"
                                label="Marketplace"
                                id="Marketplace"
                                value={this.state.values.marketplace}
                                onChange={(e) => this.onChange('marketplace', e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StorefrontIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="info-input">
                            <TextField
                                placeholder="(Optional)"
                                label="Category"
                                id="Category"
                                value={this.state.values.category}
                                onChange={(e) => this.onChange('category', e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CategoryIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="info-input">
                            <TextField
                                placeholder="(Optional)"
                                label="Number of SKUs"
                                id="Number of SKUs"
                                value={this.state.values.no_of_skus}
                                onChange={(e) => this.onChange('no_of_skus', e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EqualizerIcon />
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

export default Info;