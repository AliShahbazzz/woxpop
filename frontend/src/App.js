import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
// import Fade from '@material-ui/core/Fade';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/home/home';
import Analyze from './components/main/main2';
import Contact from './components/contact/contact';
import img from './assests/images/1.gif';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 0,
      intro: true,
      screenWidth: 1080,
    }
  }
  arr = [
    <Home onclick={() => this.showAnalyze()} />,
    <Analyze />,
    <Contact closeContact={() => this.closeContact()} />,
    // <AboutUs />
  ]
  //Function to update the state whether width is greater than 720 (true/false)
  setWidth() {
    this.setState({ screenWidth: window.innerWidth >= 760 });
  }
  componentDidMount() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth.bind(this));
    setTimeout(function () {
      this.setState({ intro: false })
    }.bind(this), 2500)
  }
  showAnalyze = () => {
    this.setState({
      show: 1
    })
  }
  closeContact = () => {
    this.setState({
      show: 0
    })
  }
  togglePage = (page) => {
    if (page === 'home') {
      this.setState({
        show: 0
      })
    } else if (page === 'analyze') {
      this.setState({
        show: 1
      })
    } else if (page === 'contact') {
      this.setState({
        show: 2
      })
    } else if (page === 'about') {
      this.setState({
        show: 3
      })
    }
  }

  render() {
    return (
      this.state.intro ?
        <div className="App-intro">
          <img className="App-intro-loader" src={img} alt="" />
        </div> :
        (this.state.screenWidth) ?
          <div className="App">
            <Header
              toHome={() => this.togglePage('home')}
              toAnalyze={() => this.togglePage('analyze')}
              toContact={() => this.togglePage('contact')}
              toAbout={() => this.togglePage('about')}
            />
            {this.arr[this.state.show]}
          </div>
          : <div className='MobileError'>This Page isn't supported for mobile devices</div>
    );
  }
}