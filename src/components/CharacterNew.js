import React, { Component } from 'react';
import { Grid, Row, Col, Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { CHARACTER_CLASSES } from '../constants/CharacterClasses'
import { CharacterClass } from '../stores/CharacterClassStore'
import GloomhavenIcon from './utils/GloomhavenIcon'
import CharacterClassDetails from './CharacterClassDetails'

const characterIconWidth = "62px";

export class CharacterNewComponent extends Component {
  constructor() {
    super();
    this.state = {
      characterName: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  classNameClick(className) {
    this.setState({
      className: className
    })
  }

  createClassNameButton(className) {
    let c = CharacterClass.get(className);
    return (
      <Col xs={4} md={2} key={className}>
        <Button onClick={() => this.classNameClick(className)} className={className === this.state.className ? "btn-doomstalker" : ""}>
          <GloomhavenIcon icon={c.icon} width={characterIconWidth} /> {className}
        </Button>
      </Col>
    )
  }

  saveClick() {
    if ("" === this.state.characterName.trim()) {
      alert("Please enter a name first.");
      return;
    }
    if (this.state.className === undefined) {
      alert("Please select a class first.");
      return;
    }
    this.props.save(this.state.characterName, this.state.className)
  }

  cancelClick() {
    this.props.cancel();
  }

  renderClass() {
    return (
      <Row>
        <CharacterClassDetails characterClass={this.state.className} />
      </Row>
    )
  }

  render() {
    let classButtons = [];
    for (let className in CHARACTER_CLASSES) {
      classButtons.push(this.createClassNameButton(className));
    }
    return (
      <div className="container">
        <Grid>
          <Row>
            <Col xs={2} md={2}>
              <Button onClick={() => this.cancelClick()}>Cancel</Button>
            </Col>
            <Col xs={2} md={2}>
              <Button onClick={() => this.saveClick()}>Save</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Form>
                <FormGroup controlId="newCharacter">
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    type="text"
                    name="characterName"
                    value={this.state.characterName}
                    placeholder="Characters need a spiffy name"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <ControlLabel>Class</ControlLabel>
            </Col>
          </Row>
          <Row>
            {classButtons}
          </Row>
          { this.state.className !== "" && this.state.className !== undefined && this.renderClass() }
        </Grid>
      </div>
    );
  }
};

export default CharacterNewComponent;