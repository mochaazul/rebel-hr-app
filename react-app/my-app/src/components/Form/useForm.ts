import React from 'react';
import { useState, useCallback } from 'react';

interface UseFormtype<T> {
    fields: T,
};

const useForm = <T>({ fields }: UseFormtype<T>) => {
  const [form, setForm] = useState<T | any>(fields);

  const registeredValue = (fieldname: string) => {
    const inputObj = form[fieldname];
    const {
      value, label, errorMessage, valid, type
    } = inputObj;
    return {
      onChange: onInputChange,
      value,
      valid,
      errorMessage,
      label,
      name: fieldname,
      type
    };
  };

  const isInputFieldValid = useCallback(
    (inputField: any) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }

      return true;
    },
    [form]
  );

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      const inputObj = { ...form[name] };
      inputObj.value = value;

      const isValidInput = isInputFieldValid(inputObj);
      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }

      setForm({
        ...form,
        [name]: inputObj
      });
    },
    [form, isInputFieldValid]
  );
  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form) as any;

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return form;
  };

  const setFieldsValue = useCallback((obj: any) => {
    const newObj = { ...form };
    for (const [key, values] of Object.entries(form)) {
      newObj[key] = {
        ...values as any,
        value: obj[key] || ''
      };
    }
    setForm({
      ...form,
      ...newObj
    });
  }, [form]);

  const resetFieldsValue = useCallback(() => {
    setForm(fields);
  }, [form]);

  return {
    registeredValue,
    isFormValid,
    onSubmit,
    setFieldsValue,
    resetFieldsValue
  };
};

export default useForm;
