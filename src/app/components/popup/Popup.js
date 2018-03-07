import React from 'react';
import ReactModal from 'react-modal';
import {FontColor} from '../settings/FontColor';
import {BackColor} from '../settings/BackColor';

export class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      // By default we are not showing modal window
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // button onClick={this.handleOpenModal} - show modal window
  handleOpenModal() {
    this.setState({showModal: true});
  }

  // button onClick={this.handleCloseModal} - hide modal window
  handleCloseModal() {
    this.setState({showModal: false});
  }

  render() {

    return (
      <div>
        <button onClick={this.handleOpenModal}>Settings</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <div className="row">
            <div className="col-8">
              <h1>Settings</h1>
              <div className="row">
                <div className="col-3">
                  Change background color
                </div>
                <div className="col-1">
                  <BackColor/>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  Change font color
                </div>
                <div className="col-1">
                  <FontColor/>
                </div>
              </div>

            </div>

            <div className="col-4">
              <h1>Preview</h1>
              <div className="row">
                <div className="col-12">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure
                    dolor in reprehenderit in voluptat
                    e velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button onClick={this.handleCloseModal}>Save</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
