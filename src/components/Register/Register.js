import './Register.css';
import LoginForm from "../LoginForm/LoginForm";
import { Link } from 'react-router-dom';

const Register = ({handleRegisterSubmit, isLoading}) => {

  return (
    <div className="register">
      <LoginForm
        title='Добро пожаловать!'
        textButton='Зарегистрироваться'
        handleSubmit={handleRegisterSubmit}
        isRegister={true}
        isLoading={isLoading}
      >
    </LoginForm>
      <p className='register__link-descr'>
        Уже зарегистрированы?
        <Link to='/signin' className='register__link'>Войти</Link>
      </p>
    </div>
  );
}

export default Register;
