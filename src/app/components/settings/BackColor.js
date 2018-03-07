import React from 'react';

export class BackColor extends React.Component {

  constructor() {
    super();
    this.state = {
      backColor: localStorage.getItem('backColor') || 'white'
    };
  }

  save() {
    localStorage.setItem('backColor', this.state.backColor)
  }

  onChangeBackColor() {
    this.setState({backColor: 'green'}, this.save);
  }

  render() {
    let backColor = {
      backgroundColor: this.state.backColor
    };
    return (
      <div style={backColor}>
        <button onClick={() => this.onChangeBackColor()} className="btn btn-primary">Green</button>
      </div>
    );
  }
}