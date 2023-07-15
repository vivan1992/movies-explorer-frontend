import './ButtonProfile.css';
import { Link } from 'react-router-dom';

const ButtonProfile = ({className}) => {

  return (
    <Link to="/profile" className={`${className} button-profile link-hover`}>Аккаунт</Link>
  );
}

export default ButtonProfile;
