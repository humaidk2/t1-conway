import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="sidebar">
              <div className="my-color-container"><div className="my-color-title">Your color is:</div><div className="my-color" style={{'backgroundColor': this.props.hue}}/></div>
              <div className="my-color-container">Beacon: </div>
              <div className="my-color-container">Glider:</div>
              <div className="my-color-container"></div>
              <div className="my-color-container"></div>
            </div>);
  }
}