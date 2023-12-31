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
  { name: 'Biologia', color: '#CC4090', createdDate: '28/04/2022' },
  { name: 'Artes', color: '#05A2C2', createdDate: '28/08/2022' },
  { name: 'Geografia', color: '#C26719', createdDate: '31/12/2022' },
  { name: 'Sociologia', color: '#9B19C2', createdDate: '01/03/2022' },
];

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
            <Dialog bimesterNumber={number} gradeData={gradeData}/>
          </div>

          <div className='bimester__grades'>
            <Row className='g-5'>
              {gradeData.map((grade, index) => (
                  <Col key={index} xs={6} md={3} className='col'>
                    <Grade {...grade} />
                  </Col>
                ))
              }
              {/* <Col xs={6} md={3} className='col'>
                <Grade name='Biologia' color='#CC4090' createdDate='28/04/2022'/>
              </Col>
              <Col xs={6} md={3} className='col'>
                <Grade name='Artes' color='#05A2C2' createdDate='28/08/2022'/>
              </Col>
              <Col xs={6} md={3} className='col'>
                <Grade name='Geografia' color='#C26719' createdDate='31/12/2022'/>
              </Col>
              <Col xs={6} md={3} className='col'>
                <Grade name='Sociologia' color='#9B19C2' createdDate='01/03/2022'/>
              </Col> */}
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}