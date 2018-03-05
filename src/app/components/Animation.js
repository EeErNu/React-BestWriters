import React, { Component } from 'react';

const length = 10556;

export class Animation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      style: {
        backgroundPosition: 0,
      },
    };
    this.onMove = this.onMove.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  onMove(e) {
    const rect = e.target.getClientRects();
    const posY = Math.abs((e.pageY - rect[0].y) - 314) / 628;
    const posX = Math.abs((e.pageX - rect[0].x) - 182) / 364;
    const pos = Math.max(posY * 2, posX * 2);
    // console.log(posX, posY);
    this.setState({
      style: {
        backgroundPosition: Math.round(1 + (pos * 29)) * (length / 29),
      },
    });
  }

  onLeave() {
    this.setState({
      style: {
        backgroundPosition: 0,
      },
    });
  }

  render() {
    return (
      <div
        id="woman"
        className={this.state.className}
        onMouseMove={this.onMove}
        onMouseLeave={this.onLeave}
        style={this.state.style}
      />
    );
  }
}
