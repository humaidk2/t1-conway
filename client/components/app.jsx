import React from 'react';
import Game from './game';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="app">
              <Game />
            </div>);
  }
}
