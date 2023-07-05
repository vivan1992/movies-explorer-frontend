import './App.css';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Promo/>
      <AboutProject/>
      <Preloader/>
    </div>

  )
}

export default App;
