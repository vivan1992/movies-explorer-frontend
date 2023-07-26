import { useState, useCallback } from "react";

const nameReg = /^[а-яА-ЯёЁa-zA-Z -]+$/u;

const validateName = (value, errors, setErrors, setIsValid) => {
  if (!nameReg.test(value)) {
    setErrors({ ...errors, name: 'Имя может содержать только буквы, пробелы, дефисы' })
    setIsValid(false)
  }
  else setErrors({ ...errors, name: '' })
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
    setIsValid(target.closest("form").checkValidity());
    if (name === 'name' && !target.validationMessage) validateName(value, errors, setErrors, setIsValid);
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
