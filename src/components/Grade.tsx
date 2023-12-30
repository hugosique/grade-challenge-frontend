import '../styles/Grade.scss';

import ChartIcon from '../assets/icons/Chart.svg';
import TrashIcon from '../assets/icons/Trash.svg';

export default (props: any) =>
    <div className='grade'>
        <div className='grade__content'>
            <div className='grade__content--info'>
                <h1>Artes</h1>
                <h2>28/04/2022</h2>
            </div>
            <div className='grade__content--note'>
                <img src={ChartIcon} alt="ChartIcon" />
                <span>Nota: 5</span>
            </div>
        </div>

        <img src={TrashIcon} alt="TrashIcon" />
    </div>