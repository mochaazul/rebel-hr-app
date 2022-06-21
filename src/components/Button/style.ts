import React from 'react';
import styled from 'styled-components';

export type ButtonType = {
  theme?: string;
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const buttonTheme = ({ theme, disabled }: ButtonType) => {
  if (theme === 'primary') {
    return `
      background-color: ${ disabled ? 'var(--inactive-grey)' : 'var(--color-yellow-100)' };
      border: 3px solid var(--color-blue-100);
      color: var(--color-blue-100);
    `;
  }

  if (theme === 'secondary') {
    return `
      background-color: yellow;
    `;
  }

  if (theme === 'outline') {
    return `
      border: 1px solid pink;
    `;
  }

  if (theme === 'text') {
    return `
      width: fit-content;
      padding: 0px;
    `;
  }

  return '';
};

const ButtonStyle = styled.button<ButtonType>`
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  width: ${ props => props.width };
  min-width: 250px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border: none;

  ${ props => buttonTheme(props) }
`;

export default ButtonStyle;
