import React from 'react';
import ReactDom from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Animation} from './components/Animation';
import {Todo} from './components/todo/Todo';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      color: localStorage.getItem('color') || 'white',
    };
  }

  save() {
    localStorage.setItem('color', this.state.color);
  }

  onChangeColor() {
    this.setState({ color: 'black' }, this.save);
  }

  render() {
    let style = {
      backgroundColor: this.state.color
    };
    return (
      <div style={style}>
        <div className="container">
          <button onClick={() => this.onChangeColor()} className="btn btn-primary">Change color</button>

          <div className="row">
            <div className="col-12">
              <Header/>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Home initialAge={20}/>
            </div>
            <div className="col-6">
              <Todo/>
            </div>
            <div className="col-6">
              {/*<Animation/>*/}
            </div>
          </div>

        </div>
      </div>
    );
  }
}
ReactDom.render(
  <App/>,
  window.document.getElementById('app')
);

