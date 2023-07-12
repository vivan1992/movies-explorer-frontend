import './MoviesCardList.css';
import { initialCards } from '../../utils/utils';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({card, textButton}) => {

  const cardsElements = card.map((item, i) => {
    return (
      <li className="card-list__item" key={i}>
        <MoviesCard card={item} textButton={textButton}/>
      </li>
    );
  })

  console.log(initialCards);
  return (
    <section className="card-list">
      <ul className="card-list__items">
        {cardsElements}
      </ul>
      <button className='card-list__more'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
