import './style.css';

const Card = (props) => {
    return(
        <div className='card'>
            <p>{props.date}</p>
            <h3>{props.title}</h3>
            <p>{props.company}</p>
            <p className='card__desc'>{props.description}</p>
        </div>
    )
}

export default Card;