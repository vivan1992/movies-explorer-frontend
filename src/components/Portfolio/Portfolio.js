import './Portfolio.css';
import PortfolioLink from '../PortfolioLink/PortfolioLink';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <PortfolioLink text='Статичный сайт' link='#'/>
      <PortfolioLink text='Адаптивный сайт' link='#'/>
      <PortfolioLink text='Одностраничное приложение' link='#'/>
    </section>
  );
}

export default Portfolio;
