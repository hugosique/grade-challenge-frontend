import '../styles/Grade.scss';

import ChartIcon from '../assets/icons/Chart.svg';
import TrashIcon from '../assets/icons/Trash.svg';

import { IGradeProps } from '../interfaces/grade.model';

export default (props: IGradeProps) =>
    <div className='grade'>
        <div className='grade__content' style={{ background: props.color }}>
            <div className='grade__content--info'>
                <h1>{props.name}</h1>
                <h2>{props.createdDate}</h2>
            </div>
            <div className='grade__content--note'>
                <img src={ChartIcon} alt="ChartIcon" />
                <span>Nota: 5</span>
            </div>
        </div>

        <button className='grade__btn-delete'>
            <img src={TrashIcon} alt="TrashIcon" />
        </button>
    </div>