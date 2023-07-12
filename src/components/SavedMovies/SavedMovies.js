import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({card, textButton}) => {
  return (
    <>
      <SearchForm/>
      <MoviesCardList card={card} textButton={textButton}/>
    </>
  );
}

export default SavedMovies;
