interface TextAreaType extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string;
    valid?: boolean;
    errorMessage?: string;
}
const TextArea = ({ label, errorMessage, children, ...props }: TextAreaType) => {
    return (
        <>
            <textarea { ...props } />
            { errorMessage }
        </>

    );
};

export default TextArea;