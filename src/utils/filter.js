import { DURATION_SHORT_FILM } from "./constants";

const filterByShort = (movies) => movies.filter(movie => movie.duration <= DURATION_SHORT_FILM);

const filterByRequest = (movies, request) => {
  return movies.filter(movie => movie.nameRU.toLowerCase().includes(request.toLowerCase()))
}

const filterSearchSubmit = (movies, requestText, isShortFilm) => {
  const filteredByShort = isShortFilm ? filterByShort(movies) : null;
  const filtered =  filteredByShort ? filterByRequest(filteredByShort, requestText)
  : filterByRequest(movies, requestText)
  return filtered;
}

export default filterSearchSubmit;
