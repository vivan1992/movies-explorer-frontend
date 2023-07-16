import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import img from '../../images/aboutMe.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section id='me' className="about-me">
      <SectionTitle text='Студент'/>
      <div className="about-me__wrapper">
        <div className="about-me__text-container">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__descr">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link to='https://github.com/vivan1992' target="_blank" className="about-me__link link-hover">Github</Link>
        </div>
        <img className='about-me__avatar' src={img} alt="Аватар" />
      </div>
    </section>
  );
}

export default AboutMe;
