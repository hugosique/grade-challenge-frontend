import '../styles/BimesterGrid.scss';
import Bimester from './Bimester';
import Dialog from './Dialog';

export default (props: any) =>
    <div className='bimesterGrid'>
        <Bimester />
        <Bimester />
        <Bimester />
        <Bimester />
        <Dialog />
    </div>