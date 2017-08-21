import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: [['Beacon', [[[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [1, this.props.hue], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [1, this.props.hue], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']]]
              ],
              ['Glider', [[[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [1, this.props.hue], [1, this.props.hue], [1, this.props.hue], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']]]
              ],
              ['other', [[[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                        [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']]]
              ]],
      newMap:  [[[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
                [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']]],
      name: ''
    };
    this.changeShape = this.changeShape.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addNewMap = this.addNewMap.bind(this);
  }
  changeShape(shapeIndex) {
    let map = this.props.game;
    for(let i = 0;i < this.state.shapes[shapeIndex][1].length;i++) {
      for(let j = 0;j < this.state.shapes[shapeIndex][1][i].length;j++) {
        map[i + 5][j + 5] = this.state.shapes[shapeIndex][1][i][j];
      }
    }
    socket.emit('get', map);
  }
  cellClick(row, column, cellType) {
    let newMap = this.state.newMap;
    if(cellType === 'dead') {
      newMap[row][column][0] = 1;
      newMap[row][column][1] = this.props.hue; 
    } else {
      newMap[row][column][0] = 1;
      newMap[row][column][1] = 'rgb(219, 200, 200)';
    }
    this.setState({newMap: newMap});
  }
  handleTextChange(event) {
    this.setState({name: event.target.value});
  }
  addNewMap() {
    let shapes = this.state.shapes;
    let newMap = [this.state.name, []];
    let blankMap = [];
    for(let i = 0;i < this.state.newMap.length;i++) {
      newMap[1].push([]);
      blankMap.push([]);
      for(let j = 0;j < this.state.newMap[i].length;j++) {
        newMap[1][i].push([]);
        blankMap[i].push([0, 'rgb(219, 200, 200)'])
        newMap[1][i][j].push(this.state.newMap[i][j][0]);
        newMap[1][i][j].push(this.state.newMap[i][j][1]);
      }
    }
    shapes.push(newMap);
    this.setState({shapes: shapes, newMap: blankMap, name: ''})

  }

  render () {
    return (
            <div className="sidebar">
              <div className="my-color-container"><div className="my-color-title"><div>Your color is:</div></div><div className="my-color" style={{'backgroundColor': this.props.hue}}/></div>
              {
                this.state.shapes.map((shape, shapeIndex)=>(
                  <div key={'my-color-container' + shapeIndex} className="my-color-container" onClick={this.changeShape.bind(this, shapeIndex)}><div className="my-color-title"><div>{shape[0] + ':'}</div></div>
                    <div key={'shape' + shapeIndex} className="shape">
                    {
                      shape[1].map((row, index)=> (
                        <div key={'shape-row' + index} className="shape-row">{
                          row.map((num, i, arr) => {
                            if (num[0] === 0) {
                              return (<div key={'shape-dead-cell' + i} style={{backgroundColor: num[1]}} className="shape-item shape-dead-cell" ></div>);
                            } else if (num[0] === 1) {
                              return (<div key={'shape-live-cell' + i} style={{backgroundColor: num[1]}} className="shape-item shape-live-cell"></div>);
                            }
                          })
                        }</div>
                        ))
        
                    }</div>
                  </div>
                ))
              }
              <div className="my-color-container">
                <div className="shape-add" onClick={this.addNewMap}><i className="fa fa-lg fa-plus-circle fa-inverse icon"></i></div>
                <div className="shape-add-input"><input className="shape-input" type="text" value={this.state.name} onChange={this.handleTextChange}  /></div>
                <div className="newMap">
                {
                  this.state['newMap'].map((row, index)=> (
                    <div key={'newMap-row' + index} className="shape-row">{
                      row.map((num, i, arr) => {
                        if (num[0] === 0) {
                          return (<div key={'newMap-dead-cell' + i} onClick={this.cellClick.bind(this, index, i, 'dead')} style={{backgroundColor: num[1]}} className="shape-item shape-dead-cell" ></div>);
                        } else if (num[0] === 1) {
                          return (<div key={'newMap-live-cell' + i} onClick={this.cellClick.bind(this, index, i, 'live')} style={{backgroundColor: num[1]}} className="shape-item shape-live-cell"></div>);
                        }
                      })
                    }</div>
                    ))
                }</div>
              </div>
            </div>);
  }
}