import React, { Component } from 'react';
import { Grid, Row, Col, Button, Label } from 'react-bootstrap';

class ScenarioLevelComponent extends Component {

  constructor() {
    super();

    this.state = {
      character1: 0,
      character2: 0,
      character3: 0,
      character4: 0
    };
  }

  levelButtonClick(character, value) {
    if (this.state[character] === value) {
      // button is already on this value - clear it
      this.setState({
        [character]: 0
      });
    }
    else {
      this.setState({
        [character]: value
      });  
    }
  }

  createButton(value, activeValue, stateProperty) {
    return (
      <Col xs={1} md={1} key={value}>
        <Button onClick={() => this.levelButtonClick(stateProperty, value)} className={activeValue === value ? "btn-doomstalker" : ""} block>{value}</Button>
      </Col>
    );
  }

  normalScenarioLevel() {
    let numberCharacters = 0;
    let totalLevels = 0;

    let levels = [this.state.character1, this.state.character2, this.state.character3, this.state.character4];

    for (let i=0; i<levels.length; i++) {
      let level = levels[i];

      if (level > 0) {
        totalLevels += level;
        numberCharacters += 1;
      }
    }

    let averageLevel = totalLevels / numberCharacters;

    return Math.ceil(averageLevel / 2);
  }

  render() {
    let character1Buttons = [];
    let character2Buttons = [];
    let character3Buttons = [];
    let character4Buttons = [];

    for (let i=1; i<=9; i++) {
      character1Buttons.push(this.createButton(i, this.state.character1, "character1"));
      character2Buttons.push(this.createButton(i, this.state.character2, "character2"));
      character3Buttons.push(this.createButton(i, this.state.character3, "character3"));
      character4Buttons.push(this.createButton(i, this.state.character4, "character4"));
    }

    return (
      <div className="container">
      	<Grid>
          <Row>
            <Col xs={12} md={12}>
              <p>Select each of your characters' levels and the <strong>normal scenario level</strong> for your party will be displayed below. You can play on <strong>Easy</strong> (the indicated level -1), <strong>Normal</strong> (the indicated level), <strong>Hard</strong> (the indicated level +1) or <strong>Very Hard</strong> (the indicated level +2).</p>
            </Col>
          </Row>
      		<Row className="scenario-level-row">
            <Col xs={0} md={1}></Col>
      			{character1Buttons}
      		</Row>
          <Row className="scenario-level-row">
            <Col xs={0} md={1}></Col>
            {character2Buttons}
          </Row>
          <Row className="scenario-level-row">
            <Col xs={0} md={1}></Col>
            {character3Buttons}
          </Row>
          <Row className="scenario-level-row">
            <Col xs={0} md={1}></Col>
            {character4Buttons}
          </Row>
          <Row>
            <Col xs={10} md={11} className="text-center">
              <h3>Normal scenario level</h3>
              <Label className="label-xxlarge label-brute">{this.normalScenarioLevel()}</Label>
            </Col>
          </Row>
      	</Grid>
      </div>
    );
  }
}

export default ScenarioLevelComponent;