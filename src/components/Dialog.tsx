import React, { MouseEvent , Component } from 'react';
import '../styles/Dialog.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { DialogState } from '../interfaces/dialogState.model';
import PlusIcon from '../assets/icons/Plus.svg';

export default class Dialog extends Component<{}, DialogState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          show: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const { show } = this.state;

        return (
                <>
                <button className='btn-dialog' onClick={this.handleShow}>
                    <span>Adicionar</span>
                    <img src={PlusIcon} alt="Icon" />
                </button>

                <Modal
                    centered={true}
                    show={show} 
                    onHide={this.handleClose} 
                    backdrop="static" 
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                </>
        );
    };
}