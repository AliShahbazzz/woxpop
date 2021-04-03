import React, { Component } from 'react';
import Name from './boxes/name/name';
import Info from './boxes/info/info';
import Details from './boxes/details/details';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './ui/AddressForm';
import PaymentForm from './ui/PaymentForm';
import Review from './ui/Review';

const steps = ['Details', 'Optional', 'Calculate'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}
export default class Main extends Component {

    constructor(props) {
        super(props)
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

    useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
        },
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        stepper: {
            padding: theme.spacing(3, 0, 5),
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
    }));

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
        const classes = this.useStyles()
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Projection Calculator
                    </Typography>
                        <Stepper activeStep={this.state.currBox} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            <React.Fragment>
                                {getStepContent(this.state.currBox)}
                                <div className={classes.buttons}>
                                    {this.state.currBox !== 0 && (
                                        <Button
                                            className={classes.button}
                                            onClick={(e) => this.onClick('back', e)}>>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        onClick={(e) => this.onClick('next', e)}>
                                        >
                                            {this.state.currBox === 2 ? 'Calculate' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment >
        );
    }
}