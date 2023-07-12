import { useState } from 'react';
import './MoviesCard.css';


const MoviesCard = ({card, textButton}) => {

  //для демонстрации работы лайка
  const [isLiked, setIsLiked] = useState(false);

  const hendelClickLike = () => {
    setIsLiked(isLiked => !isLiked);
  }

  const cardLikeButtonClassName = (
    `card__like button-hover ${isLiked && 'card__like_active'}`
  );;


  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  const unitHoursArr = ['час', 'часа', 'часов'];
  const unitMinutesArr = ['минута', 'минуты', 'минут'];

  const createUnit = (num, textArr) => {
    const m = Math.abs(num) % 100;
    const n1 = num % 10;
    if (m > 10 && m < 20) { return textArr[2]; }
    if (n1 > 1 && n1 < 5) { return textArr[1]; }
    if (n1 === 1) { return textArr[0]; }
    return textArr[2];
  }

  const unitHours = createUnit(hours, unitHoursArr);
  const unitMinutes = createUnit(minutes, unitMinutesArr);

  const duration = card.duration > 60 ? `${hours} ${unitHours} ${minutes} ${unitMinutes}` : `${minutes} ${unitMinutes}`;

  return (
    <>
      <div className="card__title-wrapper">
        <p className="card__title">{card.nameRU}</p>
        <p className="card__duration">{duration}</p>
      </div>
      <img className='card__image' src={card.image} alt={card.nameRU} />
      <button className={cardLikeButtonClassName} onClick={hendelClickLike}>
        {!isLiked ? textButton : null}
      </button>
    </>
  );
}

export default MoviesCard;
