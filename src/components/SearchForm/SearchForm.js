import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="form">
        <fieldset className="form__wrapper">
          <input name='movie' type="text" className="form__input" placeholder='Фильм'/>
          <button className='form__submit'></button>
        </fieldset>
        <label className='form__wrapper-checkbox'>
          <input type='checkbox' className="form__checkbox"></input>
          <span class="form__visible-checkbox"></span>
          <span className="form__label-text">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}

export default SearchForm;
