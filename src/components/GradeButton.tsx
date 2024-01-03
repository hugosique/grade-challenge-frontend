import '../styles/GradeButton.scss';

export default (props: any) =>
    <button className='grade-button' style={{ background: props.color }} onClick={props.onClick}>
        {props.name}
    </button>