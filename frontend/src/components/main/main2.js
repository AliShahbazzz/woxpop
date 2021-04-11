import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Name from './boxes/name/name';
import Info from './boxes/info/info';
import Details from './boxes/details/details';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import ReachUs from '../reach-us/reach-us';
import img from '../../assests/images/loader-3.gif';
import Loader from '../loader/loader';
import './main.css';

export default class Main2 extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            showLoader: false,
            nameFilled: false,
            allfields: false,
            open: false,
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
                message: '',
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
                    nameFilled: true,
                    open: false
                });
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
        ];
        return arr[this.state.currBox]
    }

    onSubmit = (x) => {
        if (x === 0) {
            axios.post('api/home/',
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
                })
                .catch((err) => console.log(err))
        } else if (x === 1) {
            axios.post('api/home/addOptional/',
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
                    }, this.calculate())
                })
                .catch((err) => console.log(err))
        }
    }

    // renderLoader() {
    //     if (this.state.showLoader) {
    //         setTimeout(() => {
    //             this.setState({ showLoader: false })
    //         }, 15000);
    //         console.log(this.state.showLoader)
    //         return <Loader />
    //     } else {
    //         return null
    //     }
    // }

    calculate = () => {
        let val = this.state.values
        if (this.state.nameFilled) {
            if (val.impressions !== '' &
                val.clicks !== '' &
                val.cpc !== '' &
                val.ctr !== '' &
                val.advertising_spend !== '' &
                val.acos !== '' &
                val.advertising_order !== '' &
                val.total_units !== '' &
                val.total_sales !== '') {
                this.setState({ showLoader: true })
                axios.post('api/home/addDetails/',
                    {
                        id: val.id,
                        impressions: val.impressions,
                        clicks: val.clicks,
                        cpc: val.cpc,
                        ctr: val.ctr,
                        advertising_spend: val.advertising_spend,
                        acos: val.acos,
                        advertising_order: val.advertising_order,
                        total_units: val.total_units,
                        total_sales: val.total_sales
                    })
                    .then((res) => {
                        this.setState({
                            result: res.data.result
                        }, this.child.current.resValues(res.data.result))
                        window.scrollTo(0, 0)
                        setTimeout(() => {
                            this.setState({ showLoader: false })
                        }, 12000);
                    })
                    .catch((err) => console.log(err))
            } else {
                alert("Please fill all the fields!")
            }
        } else {
            this.setState({
                open: !this.state.open
            })
        }
    }

    handleClose = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let val = this.state.values
        let disableBtn = val.name !== '' & val.email !== '' & val.storefront !== ''
        let disableCal = this.state.result === ''
        return (
            <div className="main">
                {this.state.showLoader ? <Loader /> : null}
                {this.state.result === '' ?
                    <div className="main-text">
                        <div className="main-text-1">
                            AI powered Amazon Calculator
                    </div>
                        <div className="main-text-2">
                            Know the potential of your Amazon business sales with the power of Artificial Intelligence.
                    </div>
                    </div> :
                    <ReachUs
                        mainState={this.state.values}
                    />}
                <Details
                    ref={this.child}
                    result={this.state.result}
                    updateSection={(field, val) => this.updateSection(field, val)} />
                {disableCal ?
                    <div className="main-calculate">
                        <Button
                            variant="contained"
                            disabled={!disableCal}
                            style={disableCal ? styles.btn : styles.dbtn}
                            onClick={(e) => this.calculate(e)}
                        >
                            Calculate
                </Button>
                    </div> : null}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={styles.modal}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div style={styles.paper}>
                            <Button className="modal-close-btn" onClick={() => this.handleClose()}>X</Button>
                            <div className="modal-render">
                                {this.renderBox()}
                                <div className="modal-loader">
                                    <img className="name-loader" src={img} alt="" />
                                </div>
                            </div>
                            <div className="modal-control-btn">
                                <Button
                                    variant="contained"
                                    style={this.state.currBox === 0 ? styles.dbtn : styles.btn}
                                    onClick={(e) => this.onClick('back', e)}>
                                    Back
                            </Button>
                                <Button
                                    variant="contained"
                                    disable={disableBtn}
                                    style={disableBtn ? styles.btn : styles.dbtn}
                                    type='submit'
                                    onClick={(e) => this.onClick('next', e)}>
                                    {this.state.currBox === 1 ? 'Done' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        )
    }
}

const styles = {
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: '15px',
    },
    btn: {
        margin: '1%',
        backgroundColor: '#0154d0',
        color: '#ffffff',
    },
    dbtn: {
        margin: '1%',
        backgroundColor: '#828282',
        color: '#ffffff',
    },
}