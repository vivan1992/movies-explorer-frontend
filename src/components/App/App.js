import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <SearchForm/>
      {/* <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/> */}
      {/* <Preloader/> */}
    </div>

  )
}

export default App;
