import Logo from '../Logo/Logo';
import './LoginForm.css';

const LoginForm = ({title, textButton, children}) => {
  return (
    <section className="login-form">
      <Logo/>
      <h2 className="login-form__title">{title}</h2>
      <form className="login-form__form">
        {children}
        <label className='login-form__field'>
          <span className="login-form__placeholder">E-mail</span>
          <input
            type="email"
            name='email'
            className="login-form__input"
            required
          />
        </label>
        <label className='login-form__field'>
          <span className="login-form__placeholder">Пароль</span>
          <input
            type="password"
            name='password'
            className="login-form__input"
            required
          />
        </label>
        <button className='login-form__submit'>{textButton}</button>
      </form>
    </section>
  );
}

export default LoginForm;
