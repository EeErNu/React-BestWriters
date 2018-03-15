import React from 'react';

export class FontSize extends React.Component {
  constructor() {
    super();
    this.state = {
      fontSize: JSON.parse(localStorage.getItem('fontSize')) || 14
    };
  }

  save() {
    localStorage.setItem('fontSize', JSON.stringify(this.state.fontSize))
  }

  onChangeFontSize() {
    this.setState({
      fontSize: this.state.fontSize + 2
    }, this.save);
  }

  render() {
    let fontSize = {
      fontSize: this.state.fontSize + 'px'
    };
    return (
      <div style={fontSize}>
        <button onClick={() => this.onChangeFontSize()} className="btn btn-primary">Size</button>
      </div>
    );
  }
}

