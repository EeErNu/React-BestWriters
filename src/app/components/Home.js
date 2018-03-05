import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
     age: props.initialAge
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age +1
    });
  }

  onMakeYounger() {
    this.setState({
      age: this.state.age -1
    });
  }

  render() {
    return (
      <div>
        <p>This is a Home Component!</p>
        <p>You age is: {this.state.age}</p>

        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Increase age</button>
        <button onClick={() => this.onMakeYounger()} className="btn btn-danger">Decrease age</button>

      </div>
    );
  }
}

Home.propTypes = {
  initialAge: PropTypes.number
};
