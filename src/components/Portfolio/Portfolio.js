import './Portfolio.css';
import PortfolioLink from '../PortfolioLink/PortfolioLink';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <PortfolioLink text='Статичный сайт' link='https://vivan1992.github.io/how-to-learn/'/>
      <PortfolioLink text='Адаптивный сайт' link='https://vivan1992.github.io/russian-travel/'/>
      <PortfolioLink text='Одностраничное приложение' link='https://mesto.ivan.practicum.nomoreparties.sbs' border={false}/>
    </section>
  );
}

export default Portfolio;
