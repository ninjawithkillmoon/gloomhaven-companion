import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Scenarios from './components/Scenarios';
import Party from './components/Party';
import ScenarioLevel from './components/ScenarioLevel';
import EnhancementCalculator from './components/EnhancementCalculator';
import MonsterHealth from './components/MonsterHealth';
import Prosperity from './components/Prosperity';
import Achievements from './components/Achievements';
import Characters from './components/Characters';
import Unlocks from './components/Unlocks';
import GameStore from './stores/GameStore';
import ErrorStore from './stores/ErrorStore';
import ErrorActions from './actions/ErrorActions';
import Prototypes from './prototypes';

class App extends Component {
  constructor() {
    super();

    Prototypes.init();

    this.state = {
      game: GameStore.getGame(),
      error: ErrorStore.getError()
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GameStore.addGameChangeListener(this.onChange);
    ErrorStore.addErrorChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeGameChangeListener(this.onChange);
    ErrorStore.addErrorChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      game: GameStore.getGame(),
      error: ErrorStore.getError()
    });
  }

  closeErrorModal() {
    ErrorActions.clearError();
  }

  render() {
    return (
      <Router>
        <div className="content">
          <Header></Header>

          <Route exact path="/" component={Home} />
          <Route path="/scenarios" component={Scenarios}/>
          <Route path="/party" component={Party}/>
          <Route path="/utilities/scenarioLevel" component={ScenarioLevel}/>
          <Route path="/utilities/enhancementCalculator" component={EnhancementCalculator}/>
          <Route path="/utilities/monsterHealth" component={MonsterHealth}/>
          <Route path="/prosperity" component={Prosperity}/>
          <Route path="/achievements" component={Achievements}/>
          <Route path="/unlocks" component={Unlocks}/>
          <Route path="/characters" component={Characters}/>

          <Modal id="modal" show={this.state.error != null} onHide={this.closeErrorModal}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="error-custom-message">
                {this.state.error && this.state.error.message}
              </div>
              <div className="error-stack">
                <pre>
                  {this.state.error && this.state.error.originalError.stack}
                </pre>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-lightning" onClick={this.closeErrorModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
