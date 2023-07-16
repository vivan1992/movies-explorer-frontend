import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = ({handleBurgerClick}) => {
  return (
    <header className='header'>
      <Logo/>
      <Navigation handleBurgerClick={handleBurgerClick}/>
    </header>
  );
}

export default Header;
