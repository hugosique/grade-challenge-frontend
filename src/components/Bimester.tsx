
import Grade from './Grade';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Bimester.scss';

import PlusIcon from '../assets/icons/Plus.svg';

export default (props: any) =>
    <Container>
        <div className='bimester'>
            <div className='bimester__header'>
                <h1>Bimestre 1</h1>
                <button>
                    <span>Adicionar</span>
                    <img src={PlusIcon} alt="Icon" />
                </button>
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