import { Component } from 'react';
// Components
import Grade from './Grade';
import Dialog from './Dialog';
import { Container, Row, Col } from 'react-bootstrap';
// Styles
import '../styles/Bimester.scss';
// Interfaces
import {IBimesterProps, IBimesterState} from '../interfaces/bimester.model';
// Service
import { ApiService } from '../services/api.service';

const gradeData = [
  { name: 'Biologia', color: '#CC4090'},
  { name: 'Artes', color: '#05A2C2'},
  { name: 'Geografia', color: '#C26719'},
  { name: 'Sociologia', color: '#9B19C2'},
];

export default class Bimester extends Component<IBimesterProps, IBimesterState> {

  constructor(props: IBimesterProps) {
    super(props)

    this.state = {
      grades: props.data || [],
    }
  }

  render() {
    const {number, data } = this.props;
    const { grades } = this.state;

    return (
      <Container>
        <div className='bimester'>
          <div className='bimester__header'>
            <h1>Bimestre {number}</h1>
            <Dialog bimesterNumber={number} gradeData={data}/>
          </div>

          <div className='bimester__grades'>
            <Row className='g-5'>
              {grades.map((grade, index) => (
                  <Col key={index} xs={6} md={3} className='col'>
                    <Grade {...grade} color={gradeData.find(e => e.name === grade.disciplina)?.color}/>
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}