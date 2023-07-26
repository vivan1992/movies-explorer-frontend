import Logo from '../Logo/Logo';
import './LoginForm.css';

import { useFormWithValidation } from '../../hooks/useValidate';

const LoginForm = ({title, textButton, handleSubmit, isRegister, isLoading}) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({name: '', email: '', password: ''});

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = {email: values.email, password: values.password};
    if (values.name) {
      data.name = values.name;
    }
    handleSubmit(data);
    resetForm();
  }
  return (
    <section className="login-form">
      <Logo/>
      <h2 className="login-form__title">{title}</h2>
      <form noValidate className="login-form__form" onSubmit={handleSubmitForm}>
        {isRegister ?
          <label className='login-form__field'>
            <span className="login-form__placeholder">Имя</span>
            <input
              type="text"
              name='name'
              className="login-form__input"
              required
              value={values.name}
              onChange={handleChange}
              minLength='2'
              maxLength='30'
            />
            <span className='login-form__error'>{errors.name}</span>
          </label>
        : null
        }
        <label className='login-form__field'>
          <span className="login-form__placeholder">E-mail</span>
          <input
            type="email"
            name='email'
            className="login-form__input"
            required
            onChange={handleChange}
            value={values.email}
          />
          <span className='login-form__error'>{errors.email}</span>
        </label>
        <label className='login-form__field'>
          <span className="login-form__placeholder">Пароль</span>
          <input
            type="password"
            name='password'
            className="login-form__input"
            required
            onChange={handleChange}
            value={values.password}
          />
          <span className='login-form__error'>{errors.password}</span>
        </label>
        <button disabled={!isValid || isLoading} className='login-form__submit'>{textButton}</button>
      </form>
    </section>
  );
}

export default LoginForm;
