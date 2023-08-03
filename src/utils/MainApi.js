import { MAIN_API_URL } from "./constants";

class MainApi {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _request(path, method = 'GET', body = null) {
    return fetch(this._url + path, {method, credentials: 'include', headers: this._headers, body})
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject({status: res.status});
      });
  }

  getMovies() {
    return this._request('/movies');
  }

  postMovie(body) {
    return this._request('/movies', 'POST', JSON.stringify(body));
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, 'DELETE');
  }

  getUserInfo() {
    return this._request('/users/me');
  }

  setUserInfo(body) {
    return this._request('/users/me', 'PATCH', JSON.stringify(body));
  }

  register(body) {
    return this._request('/signup', 'POST', JSON.stringify(body))
  }

  authorize(body) {
    return this._request('/signin', 'POST', JSON.stringify(body))
  }

  checkJWT() {
    return this._request('/users/me')
  }

  exit() {
    return this._request('/signout', 'POST')
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;
