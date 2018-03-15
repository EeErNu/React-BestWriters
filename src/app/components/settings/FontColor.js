import React from 'react';

export class FontColor extends React.Component {

  constructor() {
    super();
    this.state = {
      fontColor: parseInt(localStorage.getItem('fontColor'), 10) || 'black'
    };
  }

  save() {
    localStorage.setItem('fontColor', this.state.fontColor)
  }

  onChangeFontColor() {
    this.setState({fontColor: 'red'}, this.save);
  }

  render() {
    let fontColor = {
      fontColor: this.state.fontColor
    };
    return (
      <div style={fontColor}>
        <button onClick={() => this.onChangeFontColor()} className="btn btn-primary">Red</button>
      </div>
    );
  }
}

