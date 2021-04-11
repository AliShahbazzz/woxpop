import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import './home.css';

class Home extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }
    render() {
        return (
            <Fade in={true} timeout={2000}>
                <div className="home-root">
                    <div className="home-text">
                        <span className="home-text-1">AI-Powered Amazon Tracking</span><br />
                        <span className="home-text-2">We help brands make better Advertising decisions by delivering world-class, scalable insights.</span>
                    </div>
                    <Button
                        className="home-button"
                        onClick={this.props.onclick}>
                        Analyze your account</Button>
                </div>
            </Fade>
        );
    }
}

export default Home;