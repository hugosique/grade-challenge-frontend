import { Component } from 'react';
// Styles
import '../styles/Dialog.scss';
// Components
import Modal from 'react-bootstrap/Modal';
import Form from './Form';
// Interfaces
import { IDialogState, IDialogProps } from '../interfaces/dialog.model';
// Icons
import PlusIcon from '../assets/icons/Plus.svg';
import CloseIcon from '../assets/icons/Close.svg';

export default class Dialog extends Component<IDialogProps, IDialogState> {
    constructor(props: IDialogProps) {
        super(props);

        this.state = {
          show: false,
          inputValue: '',
          selectedGrade: undefined,
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    // handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     const inputValue = event.target.value;

    //     if (/^(10(\.0{0,1})?|[0-9](\.\d{0,1})?)$/.test(inputValue) || inputValue === '') {
    //       this.setState({ inputValue });
    //     }
    // }

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
                    <Form {...this.props} />
                </Modal>
                </>
        );
    };
}