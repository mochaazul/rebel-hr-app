type CreateFieldConfig = {
    name: string, type: string, defaultValue?: string;
};

export const createFieldConfig = ({ name, type, defaultValue = "" }: CreateFieldConfig) => {
    return {
        value: defaultValue,
        valid: false,
        errorMessage: "",
        touched: false,
        name,
        type
    };
};
const createValidationRule = (ruleName: string, errorMessage: string, validateFunc: (inputValue: any, formObj: any) => void) => {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunc
    };
};



export const requiredRule = (inputName: string) => {
    return createValidationRule(
        "required",
        `${ inputName } required`,
        (inputValue) => inputValue.length !== 0
    );
};

export const minLengthRule = (inputName: string, minCharacters: number) => {
    return createValidationRule(
        "minLength",
        `${ inputName } should contain atleast ${ minCharacters } characters`,
        (inputValue) => inputValue.length >= minCharacters
    );
};

export const maxLengthRule = (inputName: string, maxCharacters: number) => {
    return createValidationRule(
        "minLength",
        `${ inputName } cannot contain more than ${ maxCharacters } characters`,
        (inputValue) => inputValue.length <= maxCharacters
    );
};

export const passwordMatchRule = () => {
    return createValidationRule(
        "passwordMatch",
        `passwords do not match`,
        (inputValue, formObj) => inputValue === formObj.password.value
    );
};
