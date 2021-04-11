import React, { Component } from 'react';
import logo from '../../assests/images/logo.gif';
import Fade from '@material-ui/core/Fade';
import './header.css'

class Header extends Component {
    state = {}
    render() {
        return (
            <Fade in={true} timeout={1000}>
                <header className="header">
                    <div className="header-1">
                        <img className="header-logo" src={logo} alt="" onClick={this.props.toHome} />
                        {/* AI-orb */}
                    </div>
                    <div className="header-2">
                        <div onClick={this.props.toAnalyze}>Analyze </div>|
                    <div onClick={this.props.toContact}> Contact Us </div>|
                    <div onClick={this.props.toAbout}> About Us </div>

                    </div>
                </header>
            </Fade>
        );
    }
}

export default Header;