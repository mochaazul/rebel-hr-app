import styled from 'styled-components';

export type InputType = {
  type?: string;
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};

const InputStyle = styled.div`
  .input-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  input {
    height: var(--component-height);
    width: 100%;
    min-width: 250px;
    padding: 15px 15px;
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    border: 3px solid var(--color-gray-100);
    color: var(--color-yellow-100);
    font-size: 14px;

    :focus {
      border: 3px solid var(--color-blue-100);
    }

    ::placeholder {
      color: #797979;
    }
  }

  .eye-icon {
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
  }

  textarea {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-family: Poppins;
    font-size: 12px;

    ::placeholder {
      color: #797979;
    }
  }
`;

export default InputStyle;
