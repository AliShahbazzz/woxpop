import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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
                        <div className="info-input">
                            <TextField
                                id="standard-basic"
                                label="Marketplace"
                                value={this.state.values.marketplace}
                                onChange={(e) => this.onChange('marketplace', e)} />
                        </div>
                        <div className="info-input">
                            <TextField
                                id="standard-basic"
                                label="Category"
                                value={this.state.values.category}
                                onChange={(e) => this.onChange('category', e)} />
                        </div>
                        <div className="info-input">
                            <TextField
                                id="standard-basic"
                                label="Number of SKUs"
                                value={this.state.values.no_of_skus}
                                onChange={(e) => this.onChange('no_of_skus', e)} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Info;