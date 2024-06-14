


import { FC } from "react"
import { TIconSvg } from "@src/types"
import styled, { css } from "styled-components"

const IconRemoveStyled = styled.svg<TIconSvg & { type?: string }>`
  ${(props) => props.type === 'add' && css`
        transform: rotate(45deg);
        fill: green;
    `}

  ${(props) => props.type === 'remove' && css`
        fill: red;
        padding-left: 15px;
    `}
`

const IconRemove: FC<TIconSvg & { type: string }> = ({ ...rest }) => {

    return (
        <>
            <IconRemoveStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  {...rest}>
                <path d="M498.109 430.993a47.458 47.458 0 0 1-67.116 67.116L263.671 330.784a10.848 10.848 0 0 0-15.341 0L81.007 498.109a47.459 47.459 0 0 1-67.117-67.116l167.325-167.319a10.847 10.847 0 0 0 0-15.341L13.891 81.007a47.458 47.458 0 0 1 67.116-67.116L248.33 181.22a10.851 10.851 0 0 0 15.341 0L430.993 13.891a47.458 47.458 0 0 1 67.116 67.116L330.784 248.333a10.847 10.847 0 0 0 0 15.341z" />
            </IconRemoveStyled>
        </>
    )
}

export default IconRemove
