import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";

const SavedMovies = ({cards, textButton, handleSubmitSearchForm, handleDeleteMovies, errorServer}) => {
  const initialCard = localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')).movies : [];
  const [isSeached, setIsSeached] = useState(false);

  const handleSubmitForm = (data) => {
    handleSubmitSearchForm(data);
    setIsSeached(true);
  }

  console.log('save');
  return (
    <>
      <SearchForm
        handleSubmitSearchForm={handleSubmitForm}
        isSaved={true}
      />
      <MoviesCardList
        cards={isSeached ? cards : initialCard}
        textButton={textButton}
        isVisibleButton={false}
        isSaved={true}
        handleDeleteMovies={handleDeleteMovies}
        errorServer={errorServer}
      />
    </>
  );
}

export default SavedMovies;
