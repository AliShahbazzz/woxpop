import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {
                name: '',
                email: '',
                message: ''
            },
        }
    }

    backClick = () => {
        this.props.closeContact()
    }

    onChange = (field, e) => {
        let val = e.target.value;
        let curVal = this.state.values;
        curVal[field] = val;

        this.setState({
            values: curVal
        });
    }

    onSubmit = () => {
        axios.post('api/home/contact/',
            {
                name: this.state.values.name,
                email: this.state.values.email,
                message: this.state.values.message,
            })
            .then((res) => {
                console.log(res)
            }, this.props.closeContact())
            .catch((err) => console.log(err))
    }
    render() {
        let val = this.state.values
        let disable = val.name !== '' & val.email !== '' & val.message !== ''
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                style={styles.modal}
                open={true}
                onClose={() => this.backClick()}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={true}>
                    <div style={styles.paper}>
                        <div className="reach-text-2">
                            Fill the form and we will get back to you shortly.
                        </div>
                        <form className="reach-us-form">
                            <div className="reach-us-inner">
                                <div className="reach-us-inputs">
                                    <TextField
                                        className="reach-us-input"
                                        label="Name"
                                        id="Name"
                                        onChange={(e) => this.onChange('name', e)}
                                    />
                                </div>
                                <div className="reach-us-inputs">
                                    <TextField
                                        className="reach-us-input"
                                        label="E-mail Address"
                                        id="E-mail Address"
                                        onChange={(e) => this.onChange('email', e)}
                                    />
                                </div>
                                <div className="reach-us-inputs">
                                    <TextField
                                        className="reach-us-input"
                                        multiline={true}
                                        rows={9}
                                        label="Message"
                                        id="Message"
                                        onChange={(e) => this.onChange('message', e)}
                                    />
                                </div>
                            </div>
                        </form>
                        <Button
                            variant="contained"
                            disable={disable}
                            style={disable ? styles.btn : styles.dbtn}
                            type='submit'
                            onClick={() => this.onSubmit()}>
                            Submit
                            </Button>
                    </div>
                </Fade>
            </Modal>
        );
    }
}


const styles = {
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#ffffff',
        padding: '2% 4%',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: '15px',
    },
    btn: {
        margin: '2%',
        backgroundColor: '#3840bb',
        color: '#ffffff',
        textAlign: 'center'
    },
    dbtn: {
        margin: '2%',
        backgroundColor: '#6973fc',
        color: '#ffffff',
        textAlign: 'center'
    },
}