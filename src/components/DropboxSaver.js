import React, { Component } from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import GameStore from '../stores/GameStore';
import ErrorActions from '../actions/ErrorActions';
import moment from "moment";

class DropboxSaverComponent extends Component {

  constructor() {
    super();

    this.state = {
      displayDropboxModal: false,
      fileURL: ""
    };
  }

  closeDropboxModal() {
    this.setState({
      displayDropboxModal: false,
      fileURL: ""
    });
  }

  showDropboxModal(fileURL) {
    this.setState({
      displayDropboxModal: true,
      fileURL: fileURL
    });
  }

  startSaveToDropbox() {
    var that = this;

    // this particular Dropbox saver requires that the file to be saved is accessible via a URL
    // so first we upload the file to a temporary file host
    fetch("https://api.myjson.com/bins", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(GameStore.getGame())
    })
    .then(function(response) {
      response.json().then(function(data) {
        that.showDropboxModal(data.uri);
      }).catch(function(error) {
        ErrorActions.showError(error, "Failed to save file - error parsing JSON or contacting Dropbox. Please contact the site administrator for support.");
      });
    })
    .catch(function(error) {
      ErrorActions.showError(error, "Failed to save file - error contacting server. Please try again later or contact the site administrator for support.");
    });
  }

  saveToDropbox() {
    var that = this;

    let filename = "gloomhaven_save_" + moment().format("YYYYMMDD_HHmm") + ".txt";

    window.Dropbox.save(
      this.state.fileURL,
      filename,
      {
        success: function() {
          that.closeDropboxModal();
        },
        error: function(error) {
          ErrorActions.showError(error, "Failed to save file - error saving to Dropbox. Please try again later or contact the site administrator for support.");
        }
      }
    );
  }

  render() {
    return (
        <div className="">
          { window.Dropbox.isBrowserSupported() && 
            <Button className="btn-scoundrel" onClick={() => this.startSaveToDropbox()}><Glyphicon glyph="cloud-upload" /> Save</Button>
          }

          <Modal id="modal" show={this.state.displayDropboxModal} onHide={() => this.closeDropboxModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Save to Dropbox</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="">
                Your save file is ready to save to Dropbox.
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-scoundrel" onClick={() => this.saveToDropbox()}><Glyphicon glyph="cloud-upload" /> Save to Dropbox</Button>
              <Button className="btn-lightning" onClick={() => this.closeDropboxModal()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default DropboxSaverComponent;