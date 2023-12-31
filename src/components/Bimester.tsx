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

export default class Bimester extends Component<IBimesterProps, IBimesterState> {

  constructor(props: IBimesterProps) {
    super(props)

    this.state = {
      grades: []
    }
  }

  componentDidMount() {
    this.fetchGrades();
  }

  fetchGrades = async () => {
    try {
      const response = await ApiService.listAll();
      const data = response.data;

      // Atualizar o estado com as notas
      this.setState({ grades: data });
      console.log(data)
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
    }
  };

  render() {
    const {number} = this.props;
    const { grades } = this.state;

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