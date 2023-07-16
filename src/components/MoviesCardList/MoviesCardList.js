import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useResize } from '../../hooks/useResize';
import { useEffect, useState } from 'react';

const MoviesCardList = ({card, textButton, isVisibleButton = true}) => {

  const [newCardList, setNewCardList] = useState([]);
  const resize = useResize();

  useEffect(() => {
    onCardListLoaded();
  }, [resize.isScreenLg, resize.isScreenMd])

  const onCardListLoaded = () => {
    if (resize.isScreenLg) {
      setNewCardList(card.slice(0, 8));
    }
    else if (resize.isScreenSm) {
      setNewCardList(card.slice(0, 5));
    }
    else {
      setNewCardList(card);
    }
  };

  const cardsElements = newCardList.map((item, i) => {
    return (
      <li className="card-list__item" key={i}>
        <MoviesCard card={item} textButton={textButton}/>
      </li>
    );
  })

  return (
    <section className="card-list">
      <ul className="card-list__items">
        {cardsElements}
      </ul>
      {isVisibleButton ?
      <button className='card-list__more'>Ещё</button>
      :
      <div className="card-list__dividor"></div>}
    </section>
  );
}

export default MoviesCardList;
