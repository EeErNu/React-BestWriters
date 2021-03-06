import React from 'react';
import Clock from 'react-live-clock';
import {Settings} from '../components/settings/Settings';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Menu</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contacts</a>
                  </li>
                  <li className="nav-item">
                    <Settings/>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <Clock format={'DD MMMM, dddd, HH:mm:ss'} ticking={true} timezone={'Europe/Tallinn'}/>
      </div>
    );
  }
}

