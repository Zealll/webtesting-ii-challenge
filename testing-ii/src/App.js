import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  resetWhenBothBalls = e => {
    e.preventDefault()
    const balls = this.state.balls
    const strikes = this.state.strikes
    if(balls === 3 || strikes === 2) {
      this.setState({balls: 0, strikes: 0})
    } else {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      })
    }
  }

  resetWhenBothStrikes = e => {
    e.preventDefault()
    const balls = this.state.balls
    const strikes = this.state.strikes
    if(balls === 3 || strikes === 2) {
      this.setState({balls: 0, strikes: 0})
    } else {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      })
    }
  }

  foul = e => {
    e.preventDefault()

    const balls = this.state.balls
    const strikes = this.state.strikes

    if(strikes === 2) {
      this.setState({strikes: 2})
    } else {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      })
    }
  }

  hit = e => {
    e.preventDefault()
    this.setState({balls: 0, strikes: 0})
  }


  render() {
    return (
      <div className="App">
        <h1>Balls: {this.state.balls}</h1>
        <h1>Strikes: {this.state.strikes}</h1>
        <Dashboard 
          balls={this.resetWhenBothBalls} 
          strikes={this.resetWhenBothStrikes}
          foul={this.foul}
          hit={this.hit}
          />
      </div>
    );
  }
}

export default App;
