import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends React.Component {
    render() {
        let user = {
            name: 'Anna',
            age: 19,
            hobbies:
                [
                    'Dancing',
                    'Swimming',
                    'Driving'
                ]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Home user={user}>
                            <p>I am a children!</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));