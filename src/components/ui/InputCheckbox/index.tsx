import { FC, InputHTMLAttributes } from "react"

import { IconCheckbox } from "../Icons"

import { styled } from "styled-components"

import { stroke, opacity } from "@src/styles/keyframes";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    title: string
    children?: React.ReactNode
}

const Label = styled.label`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: center;
    cursor: pointer;
`;

const Span = styled.span`
    padding-left: 15px;
    opacity: 1;
    font-size: 18px;
`

const Input = styled.input`
    display: none;
    &:checked + ${Label} {
        svg {
            animation: ${stroke} 0.2s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
        }
        ${Span} {
            text-decoration: line-through;
            text-decoration-color: #000000;
            animation: ${opacity} 0.2s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
        }
    }   
`;


const InputCheckbox: FC<InputProps> = ({ title, children, className, ...rest }) => {

    const { ...attr } = rest

    return (
        <>

            <Input
                {...attr}
                readOnly
                type="checkbox"
            />
            <Label>
                <IconCheckbox />
                <Span>{title}</Span>
            </Label>

        </>
    )
};


export default InputCheckbox;
