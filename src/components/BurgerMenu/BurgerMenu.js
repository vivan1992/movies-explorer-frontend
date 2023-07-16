import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

import ButtonProfile from '../ButtonProfile/ButtonProfile';

const BurgerMenu = ({isOpen, handleBurgerClickClose}) => {
  const isActiveLink = ({ isActive }) => (isActive ? "burger-menu__link link-hover burger-menu__link_active" : "burger-menu__link link-hover");

  const burgerMenuClassName = `burger-menu ${!isOpen && ' burger-menu_hidden'}`

  return (
    <div className={burgerMenuClassName}>
      <button onClick={handleBurgerClickClose} className="burger-menu__close link-hover"></button>
      <ul className="burger-menu__items">
        <li className="burger-menu__item">
          <NavLink to="/" className={isActiveLink}>Главная</NavLink>
        </li>
        <li className="burger-menu__item">
          <NavLink to="/movies" className={isActiveLink}>Фильмы</NavLink>
        </li>
        <li className="burger-menu__item">
          <NavLink to="/saved-movies" className={isActiveLink}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
        <ButtonProfile/>
    </div>
  );
}

export default BurgerMenu;
