import React, { Component } from 'react';
import Grade from './Grade';
import Dialog from './Dialog';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Bimester.scss';

export default class Bimester extends Component {
  render() {
    return (
      <Container>
        <div className='bimester'>
          <div className='bimester__header'>
            <h1>Bimestre 1</h1>
            <Dialog />
          </div>

          <div className='bimester__grades'>
            <Row className='g-5'>
              <Col xs={6} md={3} className='col'>
                <Grade />
              </Col>
              <Col xs={6} md={3} className='col'>
                <Grade />
              </Col>
              <Col xs={6} md={3} className='col'>
                <Grade />
              </Col>
              <Col xs={6} md={3} className='col'>
                <Grade />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}