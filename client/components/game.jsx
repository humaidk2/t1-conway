import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [[[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']]]
    };
    socket.on('gameMap', function(gameMap) {
      this.setState({game: gameMap});
    }.bind(this))
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(i, j) {
    let currMap = this.state.game;
    currMap[i][j] = 1;
    socket.emit('click', i, j, this.props.hue);
  }
  
  render () {
    return (
            <div className="game-container">
              <div className='game'>
              {
    		        this.state.game.map((row, index)=> (
    		          <div key={'game-row' + index} className="game-row">{
    			          row.map((num, i, arr) => {
    			            if (num[0] === 0) {
    			              return (<div key={'dead-cell' + i} style={{backgroundColor: num[1]}} className="game-item game-dead-cell"  onClick={this.clickHandler.bind(this, index, i)}></div>);
    			            } else if (num[0] === 1) {
    			              return (<div key={'live-cell' + i} style={{backgroundColor: num[1]}} className="game-item game-live-cell"></div>);
    			            }
    			          })
    		          }</div>
    			        ))
  
            	}
              </div>
            </div>);
  }
}