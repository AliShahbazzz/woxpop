import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import CategoryIcon from '@material-ui/icons/Category';
// import EqualizerIcon from '@material-ui/icons/Equalizer';
// import InputAdornment from '@material-ui/core/InputAdornment';
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
                        <div className="name-text-1">
                            Your details are safe and secure.
                            
                            The AI tool will not spam you.
                        </div>
                        <div className="info-inputs">
                            <Form.Label>Marketplace</Form.Label>
                            <Form.Control
                                className="info-input"
                                placeholder="(Optional)"
                                variant="outlined"
                                label="Marketplace"
                                id="Marketplace"
                                value={this.state.values.marketplace}
                                onChange={(e) => this.onChange('marketplace', e)}
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             <StorefrontIcon />
                                //         </InputAdornment>
                                //     ),
                                // }}
                            />
                        </div>
                        <div className="info-inputs">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                className="info-input"
                                placeholder="(Optional)"
                                variant="outlined"
                                label="Category"
                                id="Category"
                                value={this.state.values.category}
                                onChange={(e) => this.onChange('category', e)}
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             <CategoryIcon />
                                //         </InputAdornment>
                                //     ),
                                // }}
                            />
                        </div>
                        <div className="info-inputs">
                            <Form.Label>Number of SKUs</Form.Label>
                            <Form.Control
                                className="info-input"
                                placeholder="(Optional)"
                                variant="outlined"
                                label="Number of SKUs"
                                id="Number of SKUs"
                                value={this.state.values.no_of_skus}
                                onChange={(e) => this.onChange('no_of_skus', e)}
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             <EqualizerIcon />
                                //         </InputAdornment>
                                //     ),
                                // }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Info;