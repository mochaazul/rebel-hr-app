interface TextAreaType extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string;
    valid?: boolean;
    errorMessage?: string;
    touched?: boolean;
}
const TextArea = ({ label, errorMessage, touched, children, ...props }: TextAreaType) => {
    return (
        <>
            <textarea { ...props } />
            { errorMessage }
        </>

    );
};

export default TextArea;