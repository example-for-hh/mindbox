import { FC } from 'react';
import styled, { css, CSSProp } from 'styled-components';

type TitleProps = {
    title: string | React.ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const headingStyles: { [key in 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']: CSSProp } = {
    h1: css`
        font-size: 2em;
        color: #BF4F74;
    `,
    h2: css`
        font-size: 1.75em;
        color: #4F74BF;
    `,
    h3: css`
        font-size: 1.5em;
        color: #74BF4F;
    `,
    h4: css`
        font-size: 1.25em;
        color: #4F4FBF;
    `,
    h5: css`
        font-size: 1em;
        color: #BF4FBF;
    `,
    h6: css`
        font-size: 0.875em;
        color: #4FBF74;
    `,
};

const StyledTitle = styled.h1<{ as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>`
    ${props => headingStyles[props.as as keyof typeof headingStyles]}`;


const Title: FC<TitleProps> = ({ title, type }) => {
    return (
        <StyledTitle as={type}>
            {title}
        </StyledTitle>
    );
};

export default Title;