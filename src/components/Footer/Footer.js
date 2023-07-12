import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p className="footer__copyright">© 2023</p>
        <ul className="footer__items">
          <li className="footer__item">
            <Link to='https://practicum.yandex.ru/' className='footer__link link-hover'>Яндекс.Практикум</Link>
          </li>
          <li className="footer__item">
            <Link to='https://github.com/vivan1992' className='footer__link link-hover'>Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
