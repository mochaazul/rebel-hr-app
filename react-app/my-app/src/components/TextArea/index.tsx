import React from 'react';
import { StyledTextArea, TextAreaType } from './style';

const TextArea:React.FC = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label, errorMessage, children, ...props
}: TextAreaType) => {
  return (
    <>
      <StyledTextArea { ...props } />
      { errorMessage }
    </>

  );
};

export default TextArea;