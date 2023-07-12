import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className='filter-checkbox'>
      <input type='checkbox' className="filter-checkbox__checkbox"></input>
      <span className="filter-checkbox__visible-checkbox button-hover"></span>
      <span className="filter-checkbox__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
