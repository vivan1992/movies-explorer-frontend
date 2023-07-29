import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { useState } from "react";


const Movies = ({
    cards,
    textButton,
    handleSubmitSearchForm,
    initialValue,
    isCheckedShortFilm,
    handleSaveMovie,
    handleDeleteMovies,
    isLoading,
    errorServer
  }) => {

    const [isSeached, setIsSeached] = useState(false);

    const handleSubmitForm = (search, isChecked) => {
      handleSubmitSearchForm(search, isChecked);
      setIsSeached(true);
    }
  return (
    <>
      <SearchForm
        handleSubmitSearchForm={handleSubmitForm}
        initialValue={initialValue}
        isCheckedShortFilm={isCheckedShortFilm}
      />
      {isLoading ?
        <Preloader/>
        :
        isSeached && cards.length === 0 ?
          <p className="movies__not-found">{errorServer ? errorServer : 'Ничего не найдено'}</p>
        :
          <MoviesCardList
            cards={cards}
            textButton={textButton}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovies={handleDeleteMovies}
            errorServer={errorServer}
          />
      }
    </>
  );
}

export default Movies;
