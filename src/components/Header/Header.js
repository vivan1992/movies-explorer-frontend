import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = ({handleBurgerClick, loggedIn}) => {
  return (
    <header className='header'>
      <Logo/>
      <Navigation
        handleBurgerClick={handleBurgerClick}
        loggedIn={loggedIn}/>
    </header>
  );
}

export default Header;
