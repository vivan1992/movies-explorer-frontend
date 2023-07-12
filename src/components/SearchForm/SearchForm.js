import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <fieldset className="search-form__wrapper">
          <input name='movie' type="text" className="search-form__input" placeholder='Фильм'/>
          <button className='search-form__submit button-hover'></button>
        </fieldset>
        <FilterCheckbox/>
      </form>
    </section>
  )
}

export default SearchForm;
