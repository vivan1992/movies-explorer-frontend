import './NavTab.css';

const NavTab = () => {

  return (
    <ul className="navtab">
      <li className="navtab__item">
        <a href="#project" className="navtab__link link-hover">О проекте</a>
      </li>
      <li className="navtab__item">
        <a href="#techs" className="navtab__link link-hover">Технологии</a>
      </li>
      <li className="navtab__item">
        <a href="#me" className="navtab__link link-hover">Студент</a>
      </li>
    </ul>
  );
}

export default NavTab;
