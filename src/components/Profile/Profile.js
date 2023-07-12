import { useRef, useState, useCallback, useEffect } from 'react';
import './Profile.css';

const Profile = () => {

  // Для демонстрации работы редактирования профиля

  const [isInputEnabled, setIsInputEnabled] = useState(true);
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  },
  [isInputEnabled]
  );

  const handleClickEdit = (e) => {
    e.preventDefault();
    setIsInputEnabled(false);
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    setIsInputEnabled(true);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className='profile__field'>
          <input
            ref={nameRef}
            autoFocus={true}
            onChange={handleChangeName}
            type="text"
            name='name'
            className="profile__input"
            required
            value={name}
            disabled={isInputEnabled}
          />
          <span className="profile__placeholder">Имя</span>
        </label>
        <div className="profile__dividor"></div>
        <label className='profile__field'>
          <input
            onChange={handleChangeEmail}
            type="email"
            name='email'
            className="profile__input"
            required
            value={email}
            disabled={isInputEnabled}
          />
          <span className="profile__placeholder">E-mail</span>
        </label>
        {isInputEnabled ?
        <button onClick={handleClickEdit} className='profile__edit link-hover'>Редактировать</button>
        :
        <button onClick={handleClickSubmit} className='profile__submit button-hover'>Сохранить</button>
        }
      </form>
      {isInputEnabled ?
      <button className='profile__exit link-hover'>Выйти из аккаунта</button>
      :
      null
      }

    </section>
  )
}

export default Profile;
