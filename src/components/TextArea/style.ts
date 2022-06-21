import React from 'react';
import Styled from 'styled-components';
export interface TextAreaType extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string;
    valid?: boolean;
    errorMessage?: string;
    ref?: React.RefObject<HTMLTextAreaElement>

}

export const StyledTextArea = Styled.textarea<TextAreaType>``;