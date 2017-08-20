import React from 'react';
import Game from './game';
import Sidebar from './sidebar'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.hue = 'rgb(' + 
            (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ')';
  }
  
  render () {
    return (
            <div className="app">
              <Sidebar hue={this.hue} />
              <Game hue={this.hue} />
            </div>);
  }
}
