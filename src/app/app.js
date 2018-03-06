import React from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header';
import {Home} from './components/Home';
import {Animation} from './components/Animation';
import {Todo} from './components/todo/Todo';

class App extends React.Component {
  render() {
    return (
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
            <Animation/>
          </div>
        </div>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
