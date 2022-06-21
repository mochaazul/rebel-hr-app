import React from 'react';
interface TextAreaType extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string;
    valid?: boolean;
    errorMessage?: string;
}
const TextArea:React.FC = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label, errorMessage, children, ...props
}: TextAreaType) => {
  return (
    <>
      <textarea { ...props } />
      { errorMessage }
    </>

  );
};

export default TextArea;