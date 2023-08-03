import './NotFound.css';

import {useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-3, {replace: true});
  }

  return (
    <section className='not-found'>
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Страница не найдена</h2>
      <button onClick={onClick} className='not-found__button'>Назад</button>
    </section>
  );
}

export default NotFound;
