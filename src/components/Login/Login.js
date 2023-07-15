import './Login.css';

import { Link } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';


const Login = () => {
  return (
    <div className="login">
      <LoginForm title='Рады видеть!' textButton='Войти'/>
      <p className='login__link-descr'>
        Ещё не зарегистрированы?
        <Link to='/signup' className='login__link'>Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;
