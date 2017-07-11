import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Button, Glyphicon } from 'react-bootstrap';
import GameActions from '../actions/GameActions';
import ErrorActions from '../actions/ErrorActions';
import FileReaderInput from 'react-file-reader-input';
import DropboxChooser from './DropboxChooser';
import DropboxSaver from './DropboxSaver';

class HeaderComponent extends Component {

  saveGame() {
    GameActions.saveGame();
  }

  loadGame(e, results) {
    results.forEach(result => {
      let reader = new FileReader();
      reader.onload = function(e) {
        try {
          let fileContents = reader.result;
          let fileJSON = JSON.parse(fileContents);
          GameActions.loadGame(fileJSON);
        }
        catch(err) {
          ErrorActions.showError(err, "Failed to parse file. Please check it is formatted correctly and try again.");
        }
        
      };
      reader.readAsText(result[1]);
    });
  }

  render() {
    let path = location.pathname;

    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">The Arcane Library</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <li className={["/party", "/characters"].indexOf(path) > -1 ? "active dropdown" : "dropdown"}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Party&nbsp;
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/party">Party Details and Achievements</Link></li>
                <li><Link to="/characters">Characters</Link></li>
              </ul>
            </li>
            <li className={["/scenarios", "/prosperity", "/achievements"].indexOf(path) > -1 ? "active dropdown" : "dropdown"}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Global&nbsp;
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/scenarios">Scenarios</Link></li>
                <li><Link to="/prosperity">Prosperity and Treasure</Link></li>
                <li><Link to="/achievements">Global Achievements</Link></li>
              </ul>
            </li>
            <li className={path.startsWith("/utilities") ? "active dropdown" : "dropdown"}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Utilities&nbsp;
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/utilities/scenarioLevel">Scenario Level</Link></li>
                <li><Link to="/utilities/enhancementCalculator">Enhancement Calculator</Link></li>
                <li><Link to="/utilities/monsterHealth">Monster Health</Link></li>
                {/*<li role="separator" className="divider"></li>*/}
              </ul>
            </li>
          </ul>
          <div className="navbar-btn">
            <DropboxChooser></DropboxChooser>
            <DropboxSaver></DropboxSaver>
            <FileReaderInput className="load-game-file-input" as="text" id="my-file-input" onChange={this.loadGame}>
              <Button className="btn-brute"><Glyphicon glyph="save-file" /> Import</Button>
            </FileReaderInput>
            <div>
              <Button className="btn-cragheart" onClick={this.saveGame.bind(this)}><Glyphicon glyph="open-file" /> Export</Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;