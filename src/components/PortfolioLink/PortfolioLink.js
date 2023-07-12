import { Link } from 'react-router-dom';
import './PortfolioLink.css';

const PortfolioLink = ({text, link, border = true}) => {
  const isBorderStyle = border ? 'portfolio-link link-hover' : 'portfolio-link link-hover portfolio-link_border-none';
  return (
    <Link to={link} className={isBorderStyle}>{text}</Link>
  )
}

export default PortfolioLink;
