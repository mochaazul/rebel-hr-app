import styled from 'styled-components';

export type TextType = {
  fontType?: string;
  fontFamily?: string;
  children?: React.ReactNode;
  className?: string;
  text?: string;
  fontSize?: string;
  textAlign?: string;
  fontStyle?: string;
  fontWeight?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const TextStyle = styled.div<TextType>`
  width: fit-content;

  ${ props => `
    h1 {
      ${ props.fontFamily ? `font-family: ${ props.fontFamily }` : '' };
      font-size: ${ props.fontSize || '3.5rem' };
      text-align: ${ props.textAlign || 'left' };
      font-style: ${ props.fontStyle || 'unset' };
      font-weight: ${ props.fontWeight || 'unset' };
    }

    h2 {
      ${ props.fontFamily ? `font-family: ${ props.fontFamily }` : '' };
      font-size: ${ props.fontSize || '2.5rem' };
      text-align: ${ props.textAlign || 'left' };
      font-style: ${ props.fontStyle || 'unset' };
      font-weight: ${ props.fontWeight || 'unset' };
    }

    h3 {
      ${ props.fontFamily ? `font-family: ${ props.fontFamily }` : '' };
      font-size: ${ props.fontSize || '2rem' };
      text-align: ${ props.textAlign || 'left' };
      font-style: ${ props.fontStyle || 'unset' };
      font-weight: ${ props.fontWeight || 'unset' };

      span {
        ${ props.fontFamily ? `font-family: ${ props.fontFamily }` : '' };
        font-size: ${ props.fontSize || '2rem' };
        text-align: ${ props.textAlign || 'left' };
        font-style: ${ props.fontStyle || 'unset' };
        font-weight: ${ props.fontWeight || 'unset' };
      }
    }
    
    h4 {
      ${ props.fontFamily ? `font-family: ${ props.fontFamily }` : '' };
      font-size: ${ props.fontSize || '1.7rem' };
      text-align: ${ props.textAlign || 'left' };
      font-style: ${ props.fontStyle || 'unset' };
      font-weight: ${ props.fontWeight || 'unset' };
    }
    
    p,
    pre,
    span {
      ${ props.fontFamily ? `font-family: ${ props.fontFamily }` : '' };
      font-size: ${ props.fontSize || '1.2rem' };
      text-align: ${ props.textAlign || 'left' };
      font-style: ${ props.fontStyle || 'unset' };
      font-weight: ${ props.fontWeight || 'unset' };
    }

    @media screen and (min-width: 721px) {
      p,
      pre,
      span {
        font-size: ${ props.fontSize || '1.4rem' };
      }
    }

    pre {
      white-space: normal;
    }

    .xxs {
      font-size: 10px;
    }

    .xs {
      font-size: 12px;
    }

    .s {
      font-size: 14px;
    }

    .sm {
      font-size: 16px;
    }

    .m {
      font-size: 18px;
    }

    .md {
      font-size: 20px;
    }

    .l {
      font-size: 22px;
    }

    .lg {
      font-size: 24px;
    }

    .xl {
      font-size: 28px;
    }

    .2xl {
      font-size: 32px;
    }

    .3xl {
      font-size: 38px;
    }
  `}
`;

export default TextStyle;
