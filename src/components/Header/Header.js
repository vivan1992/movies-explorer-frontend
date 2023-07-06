import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='header'>
      <div className="logo"></div>
      <Navigation/>
    </header>
  );
}

export default Header;
