import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useResize } from '../../hooks/useResize';
import { useEffect, useState } from 'react';

import {
  INITIAL_OFFSET_SM,
  INITIAL_OFFSET_LG,
  INITIAL_OFFSET_XL,
  STEP_SM,
  STEP_XL,
} from '../../utils/constants';

const MoviesCardList = ({cards, textButton, isVisibleButton = true, handleSaveMovie, isSaved = false, handleDeleteMovies, errorServer}) => {

  const [newCardList, setNewCardList] = useState([]);
  const [offsetSm, setOffsetSm] = useState(INITIAL_OFFSET_SM);
  const [offsetLg, setOffsetLg] = useState(INITIAL_OFFSET_LG);
  const [offsetXl, setOffsetXl] = useState(INITIAL_OFFSET_XL);
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

  const handleClickMore = () => {
    if (isScreenLg) {
      setOffsetLg((offset) => offset + STEP_SM);
    }
    else if (isScreenSm) {
      setOffsetSm((offset) => offset + STEP_SM);
    }
    else {
      setOffsetXl((offset) => offset + STEP_XL);
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
      <ul className="card-list__items">
        {cardsElements}
      </ul>
      {isVisibleButton && isVisibleButtonMore ?
      <button onClick={handleClickMore} className='card-list__more'>Ещё</button>
      :
      <div className="card-list__dividor"></div>}
    </section>
  );
}

export default MoviesCardList;
