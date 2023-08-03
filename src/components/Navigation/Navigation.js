import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';
import ButtonProfile from '../ButtonProfile/ButtonProfile';

const Navigation = ({handleBurgerClick, loggedIn}) => {

  const isActiveLink = ({ isActive }) =>(isActive ? "menu__link link-hover menu__link_active" : "menu__link link-hover");

  return (
    <nav className='menu'>
      {loggedIn ?
        <ul className="menu__items menu__items_hidden">
          <li className="menu__item">
            <NavLink to="/movies" className={isActiveLink}>Фильмы</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/saved-movies" className={isActiveLink}>Сохранённые фильмы</NavLink>
          </li>
        </ul>
      :
        null
      }

      <ul className="menu__items menu__items_right">
        {loggedIn
        ?
        <>
          <li className="menu__item">
            <ButtonProfile isHidden={true}/>
          </li>
          <li onClick={handleBurgerClick} className="menu__burger link-hover">
            <div className="menu__burger-line"></div>
            <div className="menu__burger-line"></div>
            <div className="menu__burger-line"></div>
          </li>
        </>
        :
        <>
          <li className="menu__item">
            <Link to="/signup" className='menu__signup link-hover'>Регистрация</Link>
          </li>
          <li className="menu__item">
            <Link to="/signin" className='menu__signin link-hover'>Войти</Link>
          </li>
        </>
        }
      </ul>
    </nav>
  );
}

export default Navigation;
