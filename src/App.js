import React, { Component } from 'react';
import './App.css';

import ImageCard from './components/ImageCard';
import Header from './components/Header';
import Navbar from './components/Navbar';

class App extends Component {
  
  state={
    counter: 0,
    topScore: 0
  };

  scoresToParent = (counter, topScore) => {
    this.setState({
      counter: counter,
      topScore: topScore
    })
  };

  render() {
    return (
    <div>
      <Navbar 
        counter= {this.state.counter}
        topScore= {this.state.topScore}
      />
      <Header />
      <ImageCard parentCallback={this.scoresToParent} />
    </div>
    );
  }
}

export default App;