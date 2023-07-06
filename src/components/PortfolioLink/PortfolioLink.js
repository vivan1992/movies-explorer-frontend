import { Link } from 'react-router-dom';
import './PortfolioLink.css';

const PortfolioLink = ({text, link}) => {
  return (
    <Link to={link} className='portfolio-link'>{text}</Link>
  )
}

export default PortfolioLink;
