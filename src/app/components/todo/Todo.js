import React from 'react';
import List from './List';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      ...(JSON.parse(localStorage.getItem('state')) || {}),
    };
  }

  save() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  onChange = (event) => {
    this.setState({ term: event.target.value }, this.save);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    }, this.save);
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
