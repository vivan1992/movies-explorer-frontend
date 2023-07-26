import { useRef, useState, useEffect, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../../hooks/useValidate';

const Profile = ({handleSignOut, handleUpdateUser, isLoading}) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({name: currentUser.name, email: currentUser.email});

  const [isInputEnabled, setIsInputEnabled] = useState(true);
  const nameRef = useRef();

  const isDuplicate = values.name === currentUser.name && values.email === currentUser.email ? true : false;

  const isButtonEnabled = !isValid || isDuplicate || isLoading;
  useEffect(() => {
    nameRef.current.focus();
  }, [isInputEnabled]);

  const handleClickEdit = (e) => {
    e.preventDefault();
    setIsInputEnabled(false);
  };

  const handleClickCancel = () => {
    setIsInputEnabled(true);
    resetForm();
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    await handleUpdateUser(values);
    setIsInputEnabled(true);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form noValidate className="profile__form">
        <label className='profile__field'>
          <input
            ref={nameRef}
            autoFocus={true}
            onChange={handleChange}
            type="text"
            name='name'
            className="profile__input"
            required
            value={values.name}
            disabled={isInputEnabled}
            minLength='2'
            maxLength='30'
          />
          <span className="profile__placeholder">Имя</span>
        </label>
        <div className="profile__wrapper-error">
          <span className='login-form__error'>{errors.name}</span>
        </div>
        <div className="profile__dividor"></div>
        <div className="profile__wrapper-error">
          <span className='login-form__error'>{errors.email}</span>
        </div>
        <label className='profile__field'>
          <input
            onChange={handleChange}
            type="email"
            name='email'
            className="profile__input"
            required
            value={values.email}
            disabled={isInputEnabled}
          />
          <span className="profile__placeholder">E-mail</span>
        </label>
        {isInputEnabled ?
        <button onClick={handleClickEdit} className='profile__edit link-hover'>Редактировать</button>
        :
        <button disabled={isButtonEnabled} onClick={handleClickSubmit} className='profile__submit button-hover'>Сохранить</button>
        }
      </form>
      {isInputEnabled ?
      <button onClick={handleSignOut} className='profile__exit link-hover'>Выйти из аккаунта</button>
      :
      <button onClick={handleClickCancel} className='profile__exit link-hover'>Отмена</button>
      }

    </section>
  )
}

export default Profile;
