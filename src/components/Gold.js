import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class GoldComponent extends Component {

  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addgold = this.addgold.bind(this);
    this.state = {
      addgold: 0,
    }
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = parseInt(event.target.value, 10);
    if (name === "gold") {
      this.props.setgold(value)
    } else {
      this.setState({
        addgold: value
      })
    }
  }

  addgold() {
    this.props.addgold(parseInt(this.state.addgold, 10));
    this.setState({
      addgold: 0
    })
  }

  render() {
    return (
      <Form>
        <FormGroup controlId="gold">
          <Row>
            <Col xs={12} md={12}>
              <ControlLabel>Gold</ControlLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={4}>
              <label className="characters-lightlabel">current</label>
            </Col>
            <Col xs={4} md={4}>
              <label className="characters-lightlabel">scenario</label>
            </Col>
            <Col xs={4} md={4}>

            </Col>
          </Row>
          <Row>
            <Col xs={4} md={4}>
              <FormControl
                type="text"
                name="gold"
                value={this.props.character.gold}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col xs={4} md={4}>
              <FormControl
                type="text"
                name="personal"
                value={this.state.addgold}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col xs={4} md={4}>
              <Button className="btn-scoundrel" onClick={() => this.addgold()}>add</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}
export default GoldComponent;
