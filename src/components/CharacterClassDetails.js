import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { CharacterClass } from '../stores/CharacterClassStore'
import GloomhavenIcon from './utils/GloomhavenIcon'

const matWidth = "500px";

export class CharacterClassDetailsComponent extends Component {
  constructor() {
    super();
    this.state = {
      matFront : true
    };
  }

  get class() {
    return CharacterClass.get(this.props.characterClass);
  }

  flipMat() {
    this.setState( {
      matFront : !this.state.matFront
    });
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <GloomhavenIcon onClick={() => this.flipMat()} icon={this.state.matFront ? this.class.matFront : this.class.matBack} width={matWidth} />
          </Col>
        </Row>
      </Grid>
      );
  }
}

export default CharacterClassDetailsComponent;