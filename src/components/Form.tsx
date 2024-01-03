import { Component } from 'react';
import '../styles/Form.scss';
import { IFormProps, IFormState } from '../interfaces/form.model';

export default class Form extends Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props)
        console.log(props);

        this.state = {
            biologyInputValue: '',
            artInputValue: '',
            geographyInputValue: '',
            sociologyInputValue: '',
            selectedGrade: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        console.log(event)

        if (/^(10(\.0{0,1})?|[0-9](\.\d{0,1})?)$/.test(inputValue) || inputValue === '') {
          this.setState({ biologyInputValue: inputValue });
        }
    }

    handleGradeClick(grade: string) {
        this.setState({ selectedGrade: grade });
    }

    render() {
        const { 
            biologyInputValue, 
            artInputValue,
            geographyInputValue,
            sociologyInputValue,
            selectedGrade

        } = this.state;

        return (
            <div className='form'>
            <h1>Disciplina</h1>
            <div className='form__grades'>
                <button 
                    style={{background: '#CC4090'}}
                    className={`btn-grade ${selectedGrade === 'biologia' ? 'selected' : ''}`}
                    onClick={() => this.handleGradeClick('biologia')}
                >
                    Biologia
                </button>
                <button 
                    style={{background: '#05A2C2'}}
                    className={`btn-grade ${selectedGrade === 'artes' ? 'selected' : ''}`}
                    onClick={() => this.handleGradeClick('artes')}
                >
                    Artes
                </button>
                <button 
                    style={{background: '#C26719'}}
                    className={`btn-grade ${selectedGrade === 'geografia' ? 'selected' : ''}`}
                    onClick={() => this.handleGradeClick('geografia')}
                >
                    Geografia
                </button>
                <button 
                    style={{background: '#9B19C2'}}
                    className={`btn-grade ${selectedGrade === 'sociologia' ? 'selected' : ''}`}
                    onClick={() => this.handleGradeClick('sociologia')}
                >
                    Sociologia
                </button>
            </div>
            <div className='form__notes'>
                <h2>Nota</h2>
                    <input 
                        type='text'
                        value={biologyInputValue}
                        onChange={this.handleInputChange}/>
            </div>
            {/* <input 
                type='text'
                value={biologyInputValue}
                onChange={this.handleInputChange}/>
            <input 
                type='text'
                value={biologyInputValue}
                onChange={this.handleInputChange}/>
            <input 
                type='text'
                value={biologyInputValue}
                onChange={this.handleInputChange}/> */}
        </div>
        );
    }
}