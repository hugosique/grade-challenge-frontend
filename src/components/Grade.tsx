import '../styles/Grade.scss';

import ChartIcon from '../assets/icons/Chart.svg';
import TrashIcon from '../assets/icons/Trash.svg';

import { IGradeProps } from '../interfaces/grade.model';

import { formatDate } from '../helpers/dateUtils';
import { Component } from 'react';
import { ApiService } from '../services/api.service';

export default class Grade extends Component<IGradeProps, {}> {
  constructor(props: IGradeProps)   {
    super(props);

    this.handleDeleteGrade = this.handleDeleteGrade.bind(this);
  }

  async handleDeleteGrade(gradeId: number) {
    try {
        const deleteResponse = await ApiService.deleteGrade(gradeId);
        this.props.fetchGrades();

        console.log('Item deletado com sucesso:', deleteResponse);
    } catch (error) {
        console.error('Erro ao deletar item:', error);
    };
  }

  render() {

    return (
        <div className='grade'>
            <div className='grade__content' style={{ background: this.props.color }}>
                <div className='grade__content--info'>
                    <h1>{this.props.disciplina}</h1>
                    <h2>{formatDate(this.props.criadoEm)}</h2>
                </div>
                <div className='grade__content--note'>
                    <img src={ChartIcon} alt="ChartIcon" />
                    <span>Nota: {this.props.nota} </span>
                </div>
            </div>

            <button className='grade__btn-delete' onClick={() => this.handleDeleteGrade(this.props.id)}>
                <img src={TrashIcon} alt="TrashIcon" />
            </button>
        </div>
    );
  }
} 
