import './Navigation.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ButtonProfile from '../ButtonProfile/ButtonProfile';

const Navigation = ({handleBurgerClick}) => {

  const isActiveLink = ({ isActive }) =>(isActive ? "menu__link link-hover menu__link_active" : "menu__link link-hover");

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
    <ul className="menu__items menu_hidden">
      <li className="menu__item">
        <NavLink to="/movies" className={isActiveLink}>Фильмы</NavLink>
      </li>
      <li className="menu__item">
        <NavLink to="/saved-movies" className={isActiveLink}>Сохранённые фильмы</NavLink>
      </li>
    </ul>
  );

  const profileRoute = renderRouteWithArrPath(
    <>
      <ButtonProfile className='menu_hidden'/>
      <li onClick={handleBurgerClick} className="menu__burger link-hover">
        <div className="menu__burger-line"></div>
        <div className="menu__burger-line"></div>
        <div className="menu__burger-line"></div>
      </li>
    </>
  );

  return (
    <nav className='menu'>
        <Routes>
          {moviesRoute}
        </Routes>

          <ul className="menu__items menu__items_right">
            <Routes>
              <Route path='/' element={
                <>
                  <li className="menu__item">
                    <Link to="/signup" className='menu__signup link-hover'>Регистрация</Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/signin" className='menu__signin link-hover'>Войти</Link>
                  </li>
                </>
              }/>

              {profileRoute}

            </Routes>
          </ul>
      </nav>
  );
}

export default Navigation;
