import { useState, useCallback } from "react";

interface IObjectKeys {
    [key: string]: string | number | Function | any;
}

interface UseFormtype<T> extends IObjectKeys {
    initialState: T,
};

const useForm = <T>({ initialState }: UseFormtype<T>) => {
    const [form, setForm] = useState<T | any>(initialState);

    const registeredValue = (fieldname: string) => {
        const inputObj = form[fieldname];
        const { value, label, errorMessage, valid } = inputObj;
        return { onChange: onInputChange, value, valid, errorMessage, label, name: fieldname };
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

            inputObj.touched = true;
            setForm({ ...form, [name]: inputObj });
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

    const onSubmit = (event: any) => {
        event.preventDefault();
        return form;
    };


    return { registeredValue, isFormValid, onSubmit };
};

export default useForm;
