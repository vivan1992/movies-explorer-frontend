import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


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
  return (
    <>
      <SearchForm
        handleSubmitSearchForm={handleSubmitSearchForm}
        initialValue={initialValue}
        isCheckedShortFilm={isCheckedShortFilm}
      />
      {isLoading ?
        <Preloader/>
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
