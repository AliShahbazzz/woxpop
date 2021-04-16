import React, { Component } from 'react';
import img1 from '../../assests/images/2.gif';
import img2 from '../../assests/images/3.gif';
import img3 from '../../assests/images/4.gif';
import { Fade } from '@material-ui/core';
import './loader.css';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0,
            seconds: 0
        }
    }

    tickShow() {
        if (this.state.show !== 2) {
            this.setState(state => ({
                show: state.show + 1
            }));
        }
    }

    componentDidMount() {
        this.change = setInterval(() => this.tickShow(), 5000)
    }

    componentWillUnmount() {
        clearInterval(this.change);
    }
    arrImg = [img1, img2, img3]
    arrQuote = ['Scanning your Store...', 'Analyzing Amazon Marketplace...', 'Caliberating Customer Behaviour patterns...']

    render() {
        return (
            <Fade in={true}>
                <div className="loader-root">
                    <div>
                        <img src={this.arrImg[this.state.show]} key={this.arrImg[this.state.show]} className={`loader-img-${this.state.show + 1}`} alt="" />
                        <p>{this.arrQuote[this.state.show]}</p>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Loader;