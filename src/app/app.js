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
      backColor: localStorage.getItem('backColor') || 'white',
      fontColor: localStorage.getItem('fontColor') || 'black'
    };
  }

  render() {
    let backColor = {
      backgroundColor: this.state.backColor
    };

    let fontColor = {
      backColor: this.state.fontColor
    };
    return (
      <div style={backColor}>
        <div style={fontColor}>
          <div className="container">

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
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  window.document.getElementById('app')
);

