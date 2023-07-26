import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useResize } from '../../hooks/useResize';
import { useEffect, useState } from 'react';

const MoviesCardList = ({cards, textButton, isVisibleButton = true, handleSaveMovie, isSaved = false, handleDeleteMovies, errorServer}) => {

  const [newCardList, setNewCardList] = useState([]);
  const [offsetSm, setOffsetSm] = useState(5);
  const [offsetLg, setOffsetLg] = useState(8);
  const [offsetXl, setOffsetXl] = useState(12);
  const [isVisibleButtonMore, setIsVisibleButtonMore] = useState(true);
  const { isScreenLg, isScreenSm} = useResize();

  useEffect(() => {
    onCardListLoaded();
  }, []);

  useEffect(() => {
    onCardListLoaded();

    if (isScreenLg) {
      setIsVisibleButtonMore(handleVisibleButtonMore(offsetLg));
    }
    else if (isScreenSm) {
      setIsVisibleButtonMore(handleVisibleButtonMore(offsetSm));
    }
    else {
      setIsVisibleButtonMore(handleVisibleButtonMore(offsetXl));
    }

  }, [isScreenLg, isScreenSm, cards, offsetSm, offsetLg, offsetXl])

  const onCardListLoaded = () => {
    if (isScreenLg) {
      setNewCardList(cards.slice(0, offsetLg));
    }
    else if (isScreenSm) {
      setNewCardList(cards.slice(0, offsetSm));
    }
    else {
      setNewCardList(cards.slice(0, offsetXl));
    }
  };

  console.log('render');

  const handleClickMore = () => {
    if (isScreenLg) {
      setOffsetLg((offset) => offset + 2);
    }
    else if (isScreenSm) {
      setOffsetSm((offset) => offset + 2);
    }
    else {
      setOffsetXl((offset) => offset + 3);
    }
  }

  const handleVisibleButtonMore = (offset) => {
    return offset < cards.length;
  };

  const cardsElements = newCardList.map((item) => {
    return (
      <li className="card-list__item" key={isSaved ? item._id : item.id}>
        <MoviesCard
          card={item}
          textButton={textButton}
          handleSaveMovie={handleSaveMovie}
          isSaved={isSaved}
          handleDeleteMovies={handleDeleteMovies}
        />
      </li>
    );
  })

  return (
    <section className="card-list">
      {cards.length > 0 ?
        <ul className="card-list__items">
          {cardsElements}
        </ul>
        :
        <p className="card-list__not-found">{errorServer ? errorServer : 'Ничего не найдено'}</p>
        }

      {isVisibleButton && isVisibleButtonMore ?
      <button onClick={handleClickMore} className='card-list__more'>Ещё</button>
      :
      <div className="card-list__dividor"></div>}
    </section>
  );
}

export default MoviesCardList;
