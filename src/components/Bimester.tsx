import { Component } from 'react';
// Components
import Grade from './Grade';
import Dialog from './Dialog';
import { Container, Row, Col } from 'react-bootstrap';
// Styles
import '../styles/Bimester.scss';
// Interfaces
import {IBimesterProps} from '../interfaces/bimester.model'

export default class Bimester extends Component<IBimesterProps> {

  constructor(props: IBimesterProps) {
    super(props)
  }

  render() {
    const {number} = this.props;

    return (
      <Container>
        <div className='bimester'>
          <div className='bimester__header'>
            <h1>Bimestre {this.props.number}</h1>
            <Dialog bimesterNumber={number}/>
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