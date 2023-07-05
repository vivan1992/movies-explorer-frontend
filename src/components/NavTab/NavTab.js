import './NavTab.css';

const NavTab = () => {

  return (
    <ul className="navtab">
      <li className="navtab__item">
        <a href="#" className="navtab__link">О проекте</a>
      </li>
      <li className="navtab__item">
        <a href="#" className="navtab__link">Технологии</a>
      </li>
      <li className="navtab__item">
        <a href="#" className="navtab__link">Студент</a>
      </li>
    </ul>
  );
}

export default NavTab;
