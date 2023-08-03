import './FilterCheckbox.css';

const FilterCheckbox = ({isChecked, setIsChecked}) => {

  const handleCheckboxClick = (e) => {
    setIsChecked(e.target.checked);
  }
  return (
    <label className='filter-checkbox'>
      <input onChange={handleCheckboxClick} checked={isChecked} type='checkbox' className="filter-checkbox__checkbox"></input>
      <span className="filter-checkbox__visible-checkbox button-hover"></span>
      <span className="filter-checkbox__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
