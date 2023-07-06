import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Techs = () => {
  return (
    <section className="techs">
      <SectionTitle text='Технологии'/>
      <h3 className="tech__title">7 технологий</h3>
      <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__items">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
