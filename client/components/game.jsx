import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="game-container" style={{'backgroundColor' : this.props.hue}}>
              <div className='game'>
              {
    		        this.props.game.map((row, index)=> (
    		          <div key={'game-row' + index} className="game-row">{
    			          row.map((num, i, arr) => {
    			            if (num[0] === 0) {
    			              return (<div key={'dead-cell' + i} style={{backgroundColor: num[1]}} className="game-item game-dead-cell"  onClick={this.props.clickHandler.bind(this, index, i)}></div>);
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