import { MOVIE_API_URL } from "./constants";
const moviesApi = () => {
  return fetch(MOVIE_API_URL + '/beatfilm-movies')
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
};

export default moviesApi;
