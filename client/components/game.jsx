import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    };
    socket.on('gameMap', function(gameMap) {
      this.setState({game: gameMap});
    }.bind(this))
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {

  }
  
  render () {
    return (
            <div className="game">
            {
  		        this.state.game.map((row, index)=> (
  		          <div key={'game-row' + index} className="game-row">{
  			          row.map((num, i, arr) => {
  			            if (num === 0) {
  			              return (<div key={'dead-cell' + i} className="game-item game-dead-cell"  onMouseDown={this.clickHandler.bind(this, index, i, 'dead')}></div>);
  			            } else if (num === 1) {
  			              return (<div key={'live-cell' + i} className="game-item game-live-cell" onMouseDown={this.clickHandler.bind(this, index, i, 'live')}></div>);
  			            }
  			          })
  		          }</div>
  			        ))
  			      }
          	}
              </div>);
  }
}