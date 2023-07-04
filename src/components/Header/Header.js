import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const arrPath = ['/movies', '/saved-movies', '/profile'];

  const renderRouteWithArrPath = (element) => {
    return arrPath.map((path, i) => {
      return (
        <Route key={i} path={path} element={element}
        />
      )
    })
  };

  const moviesRoute = renderRouteWithArrPath(
    <ul className="menu__items">
      <li className="menu__item">
        <Link to="/movies" className='menu__link'>Фильмы</Link>
      </li>
      <li className="menu__item">
        <Link to="/saved-movies" className='menu__link menu__link_font-weight400'>Сохранённые фильмы</Link>
      </li>
    </ul>
  );

  const profileRoute = renderRouteWithArrPath(
    <li className="menu__item">
      <Link to="/profile" className='menu__link menu__link_font-size14 menu__link_line-height16'>Аккаунт</Link>
      <Link to="/profile" className='menu__profile-icon'/>
    </li>
  );

  return (
    <header className='header'>
      <div className="logo"></div>
      <nav className='menu'>
        <Routes>
          {moviesRoute}
        </Routes>

          <ul className="menu__items menu__items_right">
            <Routes>
              <Route path='/' element={
                <>
                  <li className="menu__item">
                    <Link to="/signup" className='menu__link'>Регистрация</Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/signin" className='menu__link menu__link_button'>Войти</Link>
                  </li>
                </>
              }/>

              {profileRoute}

            </Routes>
          </ul>


      </nav>
    </header>
  );
}

export default Header;
