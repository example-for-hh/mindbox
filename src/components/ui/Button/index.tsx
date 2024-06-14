import { FC, ButtonHTMLAttributes } from "react"

import styled, { css } from 'styled-components'


type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string | React.ReactNode,
    typeText?: boolean,
    children?: React.ReactNode
    modal?: boolean
}

type TBtn = {
    typeText?: boolean
    modal?: boolean
}


const StyledButton = styled.button<TBtn>`
    padding: 10px;
    background: #000;
    color: #fff;
    ${(props) =>
        props.typeText &&
        css`
            background: none;
            color: #000;
            text-decoration: underline;
        `}
    ${(props) =>
        props.modal &&
        css`
            position: absolute;
            top: 0;
            right: -50px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: #fff !important;
        
            &:hover {
                transform: rotate(360deg);
            }
            svg {
                width: 20px;
                height: 20px;
                fill: #000;
            }
        `}
`;

const ButtonSpan = styled.span`
    padding: 0;
    background: none;
`;


const Button: FC<TButtonProps> = ({ typeText = false, type = 'button', ...rest }) => {

    const { text, className, children, ...attr } = rest


    return (
        <>
            <StyledButton
                {...{ type, typeText }}
                {...attr}
            >
                {text && <ButtonSpan>{text}</ButtonSpan>}
                {children}
            </StyledButton>
        </>

    )
}
export default Button;
