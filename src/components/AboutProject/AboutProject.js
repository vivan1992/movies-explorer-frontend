import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutProject = () => {
  return (
    <section className="about-project">
      <SectionTitle text='О проекте'/>
      <ul className="about-project__descr-wrap">
        <li className="about-project__descr about-project__descr_title">Дипломный проект включал 5 этапов</li>
        <li className="about-project__descr about-project__descr_title">На выполнение диплома ушло 5 недель</li>
        <li className="about-project__descr">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
        <li className="about-project__descr">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
      </ul>
      <ul className="about-project__graph-wrap">
        <li className="about-project__graph about-project__graph_green">1 неделя</li>
        <li className="about-project__graph">4 недели</li>
        <li className="about-project__graph-descr">Back-end</li>
        <li className="about-project__graph-descr">Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
