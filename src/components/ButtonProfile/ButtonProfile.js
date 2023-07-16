import './ButtonProfile.css';
import { Link } from 'react-router-dom';

const ButtonProfile = ({isHidden}) => {

  return (
    <Link to="/profile" className={`button-profile link-hover ${isHidden ? 'button-profile_hidden' : ''}`}>Аккаунт</Link>
  );
}

export default ButtonProfile;
