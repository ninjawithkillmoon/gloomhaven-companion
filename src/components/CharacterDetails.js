import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well } from 'react-bootstrap';
import CharacterClassDetails from './CharacterClassDetails'
import ExperiencePoints from './ExperiencePoints'
import Gold from './Gold'
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';

export class CharacterDetailsComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      game: GameStore.getGame(),
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  character() {
    return GameStore.getCharacter(this.state.game, this.props.character.id);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setCharacterProperty(target.name, value)
  }

  addxp(xp) {
    this.setCharacterProperty("xp", this.character().xp + xp);
  }

  setxp(xp) {
    this.setCharacterProperty("xp", xp);
  }

  addgold(gold) {
    this.setCharacterProperty("gold", this.character().gold + gold);
  }

  setgold(gold) {
    this.setCharacterProperty("gold", gold);
  }

  setCharacterProperty(name, value) {
    let gameCopy = this.state.game;
    let character = GameStore.getCharacter(gameCopy, this.props.character.id);

    if (character === undefined) {
      alert("Error.  Couldn't find character by id: " + this.props.character.id);
      return;
    }

    character[name] = value;
    GameStore.saveCharacter(gameCopy, character);
    this.setState({
      game: gameCopy
    }, function () {
      GameActions.changeGame(gameCopy);
    });
  }

  renderClass() {
    return (
      <CharacterClassDetails characterClass={this.character().className} />
    )
  }

  render() {
    let character = this.character()
    /*
     <ControlLabel>Experience Points</ControlLabel>
     <FormControl
     type="text"
     name="xp"
     value={character.xp}
     onChange={this.handleInputChange}
     />
     <label>Level: {character.level}</label><br/>
     <ControlLabel>Gold</ControlLabel>
     <FormControl
     type="text"
     name="gold"
     value={character.gold}
     onChange={this.handleInputChange}
     />
     */
    return (
      <div className="container">
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <Well>
                <Row>
                  <Form>
                    <FormGroup controlId="characterName">
                      <ControlLabel>Name</ControlLabel>
                      <FormControl
                        type="text"
                        name="name"
                        value={character.name}
                        placeholder="Characters need a cool name"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Form>
                </Row>
                <Row>
                  <ExperiencePoints character={character} addxp={(xp)=>this.addxp(xp)} setxp={(xp) => this.setxp(xp)} />
                </Row>
                <Row>
                  <Gold character={character} addgold={(g)=>this.addgold(g)} setgold={(g)=>this.setgold(g)} />
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <Form>
                      <FormGroup controlId="characterNotes">
                        <ControlLabel>Notes</ControlLabel>
                        <FormControl
                          componentClass="textarea"
                          name="notes"
                          value={character.notes}
                          onChange={this.handleInputChange}
                          placeholder="Use this text area to enter any information that you would like to keep"
                          className="party-text-area"
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Well>
            </Col>
            <Col xs={12} md={8}>
              { this.renderClass() }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CharacterDetailsComponent;