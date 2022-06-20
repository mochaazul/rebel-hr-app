import React from 'react';
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6, StyledP, TextHeadingInterface, TextParagraphInterface } from './style';


export const H1: React.FC<TextHeadingInterface> = ({ ...props }) => {
  return <StyledH1 { ...props }>{ props.children }</StyledH1>;
};

export const H2: React.FC<TextHeadingInterface> = ({ ...props }) => {
  return <StyledH2 { ...props }>{ props.children }</StyledH2>;
};

export const H3: React.FC<TextHeadingInterface> = ({ ...props }) => {
  return <StyledH3 { ...props }>{ props.children }</StyledH3>;
};

export const H4: React.FC<TextHeadingInterface> = ({ ...props }) => {
  return <StyledH4 { ...props }>{ props.children }</StyledH4>;
};

export const H5: React.FC<TextHeadingInterface> = ({ ...props }) => {
  return <StyledH5 { ...props }>{ props.children }</StyledH5>;
};

export const H6: React.FC<TextHeadingInterface> = ({ ...props }) => {
  return <StyledH6 { ...props }>{ props.children }</StyledH6>;
};

export const Paragraph: React.FC<TextParagraphInterface> = ({ ...props }) => {
  return <StyledP { ...props }>{ props.children }</StyledP>;
};

export default {
  H1, H2, H3, H4, H5, H6, Paragraph
};