import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';
import { Character } from '../stores/CharacterStore'
import GloomhavenIcon from './utils/GloomhavenIcon'
import CharacterNew from './CharacterNew'
import CharacterDetails from './CharacterDetails'

const characterIconWidth = "31px";

class CharactersComponent extends Component {

  constructor() {
    super();

    this.state = {
        game: GameStore.getGame(),
        adding: false
    };


    this.onChange = this.onChange.bind(this);
    this.newCharacter = this.newCharacter.bind(this);
    this.cancelNew = this.cancelNew.bind(this);
  }

  componentWillMount() {
    GameStore.addGameChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeGameChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      game: GameStore.getGame(),
      adding: this.state.adding
    });
  }

  createCharacterButton(characterJson) {
    let character = Character.fromJSON(characterJson);
    return (
      <Col xs={3} md={3} key={character.id}>
          <Button onClick={() => this.selectCharacter(character)} className="">
              <GloomhavenIcon icon={character.class.icon} width={characterIconWidth} /> {character.name}
              <br/>Level {character.level}
          </Button>
      </Col>
    );
  }

  newCharacter() {
    this.setState({
      game: GameStore.getGame(),
      adding: true
    });
  }

  selectCharacter(character) {
    this.setState({
      game: GameStore.getGame(),
      adding: false,
      characterId: character.id
    });
  }

  cancelNew() {
    this.setState({
      game: GameStore.getGame(),
      adding: false,
      characterId: this.state.characterId,
    });
  }

  saveNew(characterName, className) {
    let gameCopy = this.state.game;
    let newChar = new Character(characterName, className);
    //gameCopy.characters.push({number: gameCopy.characters.length, name:characterName})
    gameCopy.characters.push(newChar.json(false));
    this.setState({
      game: gameCopy,
      adding: false,
      characterId: newChar.id
    }, function() {
      GameActions.changeGame(this.state.game);
    });
  }

  renderNewCharacter() {
    return (
      <Grid>
          <Row>
              <CharacterNew save={(characterName, className) => this.saveNew(characterName, className) } cancel={this.cancelNew} />
          </Row>
      </Grid>
    );
  }

  renderCharacterDetails() {
    let char = GameStore.getCharacter(this.state.game, this.state.characterId)
    return (
      <Grid>
          <Row>
              <CharacterDetails character={char} />
          </Row>
      </Grid>
    );
  }

  renderMain() {
    let characterButtons = [];
    for (let characterIndex in this.state.game.characters) {
      characterButtons.push(this.createCharacterButton(this.state.game.characters[characterIndex]));
    }
    return (
      <Grid>
          <Row>
              <Col xs={2} md={2}>
                  <Button onClick={this.newCharacter}>New Character</Button>
              </Col>
          </Row>
          <Row className="monster-health-row">
            {characterButtons}
          </Row>
      </Grid>
    );
  }


  render() {
    return (
      <div className="container">
      	<Grid>
            {!this.state.adding && this.renderMain() }
            {this.state.adding && this.renderNewCharacter() }
            {!this.state.adding && this.state.characterId !== undefined && this.state.characterId !== -1 && this.renderCharacterDetails() }
      	</Grid>
      </div>
    );
  }
}

export default CharactersComponent;