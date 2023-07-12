import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


const Movies = ({card, textButton}) => {
  return (
    <>
      <SearchForm/>
      <MoviesCardList card={card} textButton={textButton}/>
    </>
  );
}

export default Movies;
