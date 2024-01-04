import React, { Component } from 'react';
import '../styles/Form.scss';
import { IFormProps, IFormState } from '../interfaces/form.model';

import Modal from 'react-bootstrap/Modal';
import { ApiService } from '../services/api.service';
import { formatDateToSQL } from '../helpers/dateUtils';
import { getBimesterString } from '../helpers/getBimesterString';

export default class Form extends Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props)

        this.state = {
            biologiaInputValue: this.getGradeValue('Biologia'),
            artesInputValue: this.getGradeValue('Artes'),
            geografiaInputValue: this.getGradeValue('Geografia'),
            sociologiaInputValue: this.getGradeValue('Sociologia'),
            selectedGrade: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    getGradeValue(grade: string): string {
        const { gradeData } = this.props;

        if (!gradeData) {
            return '';
        };

        const subjectData = gradeData.find((data: any) => data.disciplina === grade);
        return subjectData ? String(subjectData.nota) : '';
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const { selectedGrade } = this.state;
    
        if (/^(10(\.0{0,1})?|[0-9](\.\d{0,1})?)$/.test(inputValue) || inputValue === '') {
    
          this.setState({ [`${selectedGrade}InputValue`]: inputValue } as any);
        }
      }

    handleGradeClick(grade: string) {
        this.setState({ selectedGrade: grade });
    }

    handleConfirm = async () => {
        const disciplinesWithNotes = this.props.gradeData ? 
            this.props.gradeData.map((grade: any) => grade.disciplina) :
            [] ;

        const disciplinesToCreate = ['Biologia', 'Artes', 'Geografia', 'Sociologia'].filter(
            disciplina => !disciplinesWithNotes.includes(disciplina)
        );

        if (disciplinesToCreate.length > 0) {
            disciplinesToCreate.forEach(async el => {
                const inputValue = 
                    el === 'Biologia' ? this.state.biologiaInputValue :
                    el === 'Artes' ? this.state.artesInputValue :
                    el === 'Geografia' ? this.state.geografiaInputValue :
                    el === 'Sociologia' ? this.state.sociologiaInputValue : 
                    'none';
                if(inputValue === 'none' || !inputValue) {
                    console.log(`Preencha a nota da materia ${el}`);
                    return;
                }

                const body = {
                    bimestre: getBimesterString(this.props.bimesterNumber),
                    disciplina: el,
                    criadoEm: formatDateToSQL(new Date),
                    atualizadoEm: formatDateToSQL(new Date),
                    nota: Number(inputValue),
                };

                try {                
                    const response = await ApiService.addGrade(body);
                    console.log('Nota adicionada com sucesso:', response.data);
    
                    window.location.reload();
                } catch (error) {
                    console.error('Erro ao adicionar notas:', error);
                }
            });
        } else {
            alert('Todas as disciplinas já possuem notas cadastradas.');
        }
    }

    render() {
        const {
            selectedGrade
        } = this.state;

        return (
            <React.Fragment>
                <Modal.Body>
                <div className='form'>
                    <h1>Disciplina</h1>
                    <div className='form__grades'>
                        {['Biologia', 'Artes', 'Geografia', 'Sociologia'].map((grade) => (
                            <button
                            key={grade}
                            style={{ 
                                background: 
                                grade === 'Biologia' ? '#CC4090' : 
                                grade === 'Artes' ? '#05A2C2' : 
                                grade === 'Geografia' ? '#C26719': 
                                grade === 'Sociologia' ? '#9B19C2' : 
                                ''}}
                            className={`btn-grade ${selectedGrade === grade.toLowerCase() ? 'selected' : ''}`}
                            onClick={() => this.handleGradeClick(grade.toLowerCase())}
                            >
                            {grade}
                            </button>
                        ))}
                    </div>
                    <div className='form__notes'>
                        <h2>Nota</h2>
                        {selectedGrade === 'biologia' && (
                            <input type='text' value={this.state.biologiaInputValue} onChange={this.handleInputChange} />
                        )}
                        {selectedGrade === 'artes' && (
                            <input type='text' value={this.state.artesInputValue} onChange={this.handleInputChange} />
                        )}
                        {selectedGrade === 'geografia' && (
                            <input type='text' value={this.state.geografiaInputValue} onChange={this.handleInputChange} />
                        )}
                        {selectedGrade === 'sociologia' && (
                            <input type='text' value={this.state.sociologiaInputValue} onChange={this.handleInputChange} />
                        )}
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn-dialog' onClick={this.handleConfirm}>
                        <span>Confirmar</span>
                    </button>
                </Modal.Footer>  
            </React.Fragment>
        );
    }
}