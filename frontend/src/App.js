import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
// import Fade from '@material-ui/core/Fade';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/home/home';
import Analyze from './components/main/main2';
import Contact from './components/contact/contact';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 0
    }
  }
  arr = [
    <Home />,
    <Analyze />,
    <Contact closeContact={() => this.closeContact()} />,
    // <AboutUs />
  ]
  // componentDidMount() {
  //   setTimeout(function () { //Start the timer
  //     this.setState({ renderNow: true }) //After 1 second, set render to true
  //   }.bind(this), 4000)
  // }
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
      <div className="App">
        <Header
          toHome={() => this.togglePage('home')}
          toAnalyze={() => this.togglePage('analyze')}
          toContact={() => this.togglePage('contact')}
          toAbout={() => this.togglePage('about')}
        />
        {this.arr[this.state.show]}
      </div>
    );
  }
}