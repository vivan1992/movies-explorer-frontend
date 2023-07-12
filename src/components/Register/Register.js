import './Register.css';
import LoginForm from "../LoginForm/LoginForm";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="register">
      <LoginForm title='Добро пожаловать!' textButton='Зарегистрироваться'>
        <label className='login-form__field'>
          <span className="login-form__placeholder">Имя</span>
          <input
            type="text"
            name='name'
            className="login-form__input"
            required
          />
        </label>
    </LoginForm>
      <p className='register__link-descr'>
        Уже зарегистрированы?
        <Link to='/signin' className='register__link'>Войти</Link>
      </p>
    </section>
  );
}

export default Register;
