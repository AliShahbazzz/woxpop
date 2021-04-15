import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './reach-us.css';

export default class Reach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: this.props.mainState,
            showModal: false
        }
    }

    onChange = (field, e) => {
        let val = e.target.value;
        let curVal = this.state.values;
        curVal[field] = val;

        this.setState({
            values: curVal
        });
    }

    btnClick = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    onSubmit = () => {
        axios.post('http://localhost:5000/api/home/addMessage/',
            {
                id: this.state.values.id,
                message: this.state.values.message,
            })
            .then((res) => {
                let val = this.state.values
                val['id'] = res.data.id
                this.setState({
                    values: val,
                    showModal: !this.state.showModal
                })
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div className="reach-main">
                <div className="reach-text-1">
                    <h1><p>Potential</p></h1>
                    <p><i>Pə(ʊ)ˈtɛnʃ(ə)l</i> (adjective)</p>
                    Having or showing the capacity to develop into something in the future.<br />
                    "a campaign to woo potential customers"<br />

                    {/* Our team of skilled Amazon advertisers and domain experts can help you reach the potential sales.
                    We assess your requirements, conduct research, and develop custom services for your account. Book a Consulting session with us. */}
                </div>
                <div className="reach-btn-root">
                    <div className="reach-text-3">
                        You can only reach your potential with advanced strategies. Our Expert team can help you
                    </div>
                    <Button
                        className="reach-btn"
                        onClick={() => this.btnClick()}
                    >
                        Let's Talk
                        </Button>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={styles.modal}
                    open={this.state.showModal}
                    onClose={() => this.btnClick()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.showModal}>
                        <div style={styles.paper}>
                            <div className="reach-text-2">
                                Fill the form and we will get back to you shortly.
                        </div>
                            <form className="reach-us-form">
                                <div className="reach-us-inner">
                                    <div className="reach-us-inputs">
                                        <TextField
                                            className="reach-us-input"
                                            disabled
                                            label="Name"
                                            id="Name"
                                            value={this.state.values.name}
                                        />
                                    </div>
                                    <div className="reach-us-inputs">
                                        <TextField
                                            className="reach-us-input"
                                            disabled
                                            label="E-mail Address"
                                            id="E-mail Address"
                                            value={this.state.values.email}
                                        />
                                    </div>
                                    <div className="reach-us-inputs">
                                        <TextField
                                            className="reach-us-input"
                                            required
                                            multiline={true}
                                            rows={9}
                                            label="Message"
                                            id="Message"
                                            value={this.state.values.message}
                                            onChange={(e) => this.onChange('message', e)}
                                        />
                                    </div>
                                </div>
                            </form>
                            <Button
                                variant="contained"
                                style={styles.btn}
                                type='submit'
                                onClick={() => this.onSubmit()}>
                                Submit
                            </Button>
                        </div>
                    </Fade>
                </Modal>
            </div>
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
        borderRadius: '15px'
    },
    btn: {
        margin: '2%',
        backgroundColor: '#18b362',
        color: '#ffffff',
        textAlign: 'center'
    },
}