import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';

import { useFormWithValidation } from '../../hooks/useValidate';

const SearchForm = ({handleSubmitSearchForm, initialValue = '', isCheckedShortFilm = false, isSaved}) => {
  const [isChecked, setIsChecked] = useState(isCheckedShortFilm);
  const { values, handleChange, errors, isValid } = useFormWithValidation({search: initialValue});
  const { search } = values;

  useEffect(() => {
    if (search) {
      handleSubmitSearchForm(search, isChecked);
    }
  }, [isChecked])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitSearchForm(search, isChecked);
  };

  return (
    <section className="search-form">
      <form noValidate className="search-form__form" onSubmit={handleSubmit}>
        <fieldset className="search-form__wrapper">
          <input
            name='search'
            type="text"
            className="search-form__input"
            placeholder='Фильм'
            required={!isSaved}
            value={search}
            onChange={handleChange}
          />
          <button disabled={!isValid} type='submit' className='search-form__submit button-hover'></button>
        </fieldset>
        <div className="search-form__error-wrapper">
          <span className='search-form__error'>{errors.search}</span>
        </div>
        <FilterCheckbox isChecked={isChecked} setIsChecked={setIsChecked}/>
      </form>
    </section>
  )
}

export default SearchForm;
