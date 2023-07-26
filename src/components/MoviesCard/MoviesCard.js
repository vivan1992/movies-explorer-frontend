import { Link } from 'react-router-dom';
import './MoviesCard.css';


const MoviesCard = ({card, textButton, handleSaveMovie, isSaved, handleDeleteMovies}) => {
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies')).movies;
  const savedMovie = savedMovies.find(i => i.movieId === card.id);
  const hendelClickLike = () => {
    if (card._id) {
      handleDeleteMovies(card._id);
    } else {
      savedMovie ? handleDeleteMovies(savedMovie._id) : handleSaveMovie(card);
    }

  }

  const cardLikeButtonClassName = (
    `card-list__like button-hover ${savedMovie && 'card-list__like_active'}`
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

  const imageUrl = isSaved ? card.image : 'https://api.nomoreparties.co' + card.image.url;

  return (
    <>
      <div className="card-list__title-wrapper">
        <p className="card-list__title">{card.nameRU}</p>
        <p className="card-list__duration">{duration}</p>
      </div>
      <Link to={card.trailerLink} target="_blank">
        <img className='card-list__image' src={imageUrl} alt={card.nameRU} />
      </Link>
      <button className={cardLikeButtonClassName} onClick={hendelClickLike}>
        {!savedMovie ? textButton : null}
      </button>
    </>
  );
}

export default MoviesCard;
