import { Component } from 'react';
// Styles
import '../styles/Dialog.scss';
// Components
import Modal from 'react-bootstrap/Modal';
import GradeButton from './GradeButton';
// Interfaces
import { IDialogState, IDialogProps } from '../interfaces/dialog.model';
// Icons
import PlusIcon from '../assets/icons/Plus.svg';
import CloseIcon from '../assets/icons/Close.svg';

export default class Dialog extends Component<IDialogProps, IDialogState> {
    constructor(props: IDialogProps) {
        super(props);
        
        console.log(props.gradeData[0])

        this.state = {
          show: false,
          inputValue: '',
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;

        if (/^(10(\.0{0,1})?|[0-9](\.\d{0,1})?)$/.test(inputValue) || inputValue === '') {
          this.setState({ inputValue });
        }
    }
    
    handleConfirm() {
        const inputValueAsFloat = parseFloat(this.state.inputValue);

        if (!isNaN(inputValueAsFloat) && inputValueAsFloat >= 0 && inputValueAsFloat <= 10) {
            
            console.log('Valor válido:', inputValueAsFloat);
        } else {
            alert('Por favor, insira um valor válido entre 0 e 10.');
        }
    }

    render() {
        const { show, inputValue } = this.state;

        return (
                <>
                <button className='btn-dialog add' onClick={this.handleShow}>
                    <span>Adicionar</span>
                    <img src={PlusIcon} alt="Icon" />
                </button>

                <Modal
                    centered={true}
                    show={show} 
                    onHide={this.handleClose} 
                    keyboard={false}
                    className="custom-modal"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Bimestre {this.props.bimesterNumber}</Modal.Title>
                        <button className='close-button' onClick={this.handleClose}>
                            <img src={CloseIcon} alt="Icon" />
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form'>
                            <h1>Disciplina</h1>
                            <div className='form__grades'>
                                <GradeButton name='Biologia' color='#CC4090'/>
                                <GradeButton name='Artes' color='#05A2C2'/>
                                <GradeButton name='Geografia' color='#C26719'/>
                                <GradeButton name='Sociologia' color='#9B19C2'/>
                            </div>
                            <h2>Nota</h2>
                            <input 
                                type='text'
                                value={inputValue}
                                onChange={this.handleInputChange}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn-dialog'>
                            <span>Confirmar</span>
                        </button>
                    </Modal.Footer>
                </Modal>
                </>
        );
    };
}