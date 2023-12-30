import '../styles/Grade.scss';

import ChartIcon from '../assets/icons/Chart.svg';

export default (props: any) =>
    <div className='grade'>
        <div className='grade__info'>
            <h1>Artes</h1>
            <h2>28/04/2022</h2>
        </div>
        <div className='grade__note'>
            <img src={ChartIcon} alt="Icon" />
            <span>Nota: 5</span>
        </div>
    </div>