import { useState, useCallback } from "react";

const nameReg = /^[а-яА-ЯёЁa-zA-Z -]+$/u;
const emailReg = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const validateName = (value, name, errors, setErrors, setIsValid) => {
  switch (name) {
    case 'name':
      if (!nameReg.test(value)) {
        setErrors({ ...errors, name: 'Имя может содержать только буквы, пробелы, дефисы' })
        setIsValid(false)
      } else {
        setErrors({ ...errors, name: '' })
      }
      break;
    case 'email':
      if (name === 'email' && !emailReg.test(value)) {
        setErrors({ ...errors, email: 'Введите валидный email' })
        setIsValid(false)
      } else {
        setErrors({ ...errors, email: '' })
      }
      break;
    default:
      break;
  };
}

export function useFormWithValidation(initialValue) {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    if (!target.validationMessage) validateName(value, name, errors, setErrors, setIsValid);
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = initialValue, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, initialValue]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
