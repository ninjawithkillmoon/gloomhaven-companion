import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class ExperiencePointsComponent extends Component {

  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addxp = this.addxp.bind(this);
    this.state = {
      personal: 0,
      bonus: 0
    }
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "xp") {
      this.props.setxp(parseInt(value, 10))
    } else {
      this.setState({
        personal: name === "personal" ? value : this.state.personal,
        bonus: name === "bonus" ? value : this.state.bonus
      })
    }
  }

  addxp() {
    this.props.addxp(parseInt(this.state.personal, 10) + parseInt(this.state.bonus, 10))
    this.setState({
      personal: 0,
      bonus: 0
    })
  }

  render() {
    return (
        <Form>
          <FormGroup controlId="xp">
            <Row>
              <Col xs={12} md={12}>
                <ControlLabel>Experience Points</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col xs={3} md={3}>
                <label className="characters-lightlabel">current</label>
              </Col>
              <Col xs={3} md={3}>
                <label className="characters-lightlabel">personal</label>
              </Col>
              <Col xs={3} md={3}>
                <label className="characters-lightlabel">bonus</label>
              </Col>
              <Col xs={3} md={3}>

              </Col>
            </Row>
            <Row>
              <Col xs={3} md={3}>
                <FormControl
                  type="text"
                  name="xp"
                  value={this.props.character.xp}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col xs={3} md={3}>
                <FormControl
                  type="text"
                  name="personal"
                  value={this.state.personal}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col xs={3} md={3}>
                <FormControl
                  type="text"
                  name="bonus"
                  value={this.state.bonus}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col xs={3} md={3}>
                <Button className="btn-scoundrel" onClick={() => this.addxp()}>add</Button>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4}>
                <label className="characters-lightlabel">Level: {this.props.character.level}</label><br/>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      );
  }
}
export default ExperiencePointsComponent;
