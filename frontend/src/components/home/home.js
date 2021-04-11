import React, { Component } from 'react';
// import Header from '../header/header';
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
                    {/* <Header /> */}
                    <div className="home-text">
                        <span className="home-text-1">AI-Powered Amazon Tracking</span><br />
                        <span className="home-text-2">We help brands make better Advertising decisions by delivering world-class, scalable insights.</span>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Home;