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
    renderOne() {
        return <div>
            <img src={img1} className="loader-img-1" alt="" />
            <p>Scanning your Store...</p>
        </div>
    }
    renderTwo() {
        return <div>
            <img src={img2} className="loader-img-2" alt="" />
            <p>Analysing Amazon Marketplace...</p>
        </div>
    }
    renderThree() {
        return <div>
            <img src={img3} className="loader-img-3" alt="" />
            <p>Caliberating Customer Behaviour patterns...</p>
        </div>
    }
    arr = [
        this.renderOne(),
        this.renderTwo(),
        this.renderThree()
    ]
    render() {
        return (
            <Fade in={true}>
                <div className="loader-root">
                    {this.arr[this.state.show]}
                </div>
            </Fade>
        );
    }
}

export default Loader;