import React from 'react';

export class FontColor extends React.Component {

  constructor() {
    super();
    this.state = {
      fontColor: localStorage.getItem('fontColor') || 'black'
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

