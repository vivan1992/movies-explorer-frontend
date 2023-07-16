import './App.css';

import { initialCards, savedCards } from '../../utils/utils';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFouns';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const App = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const location = useLocation();
  const renderCondition = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies';
  const renderHederByProfile = location.pathname === '/profile';

  const handleBurgerClick = () => {
    setIsOpenBurgerMenu(true);
  }

  const handleBurgerClickClose = () => {
    setIsOpenBurgerMenu(false);
  }

  return (
    <div className="app">
      {renderCondition || renderHederByProfile ? <Header handleBurgerClick={handleBurgerClick}/> : null}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/movies' element={<Movies card={initialCards} textButton='Сохранить'/>}/>
          <Route path='/saved-movies' element={<SavedMovies card={savedCards} textButton='x'/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
      {renderCondition ? <Footer/> : null}
      <BurgerMenu isOpen={isOpenBurgerMenu} handleBurgerClickClose={handleBurgerClickClose}/>
    </div>

  )
}

export default App;
