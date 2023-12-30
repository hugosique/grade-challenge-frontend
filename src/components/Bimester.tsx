import '../styles/Bimester.scss';
import Grade from './Grade';

export default (props: any) =>
    <div className='bimester'>
        <h1>Bimestre 1</h1>

        <div className='bimester__grades'>
            <Grade />
            <Grade />
            <Grade />
            <Grade />
        </div>
    </div>