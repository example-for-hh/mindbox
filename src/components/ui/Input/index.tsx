
import { FC, InputHTMLAttributes } from "react"

import classNames from "classnames"

import styles from './styles.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactNode
    error?: boolean


}

const Input: FC<InputProps> = ({ error = false, ...rest }) => {

    const {
        children,
        ...attr
    } = rest

    return (
        <>

            <input
                {...attr}
                className={classNames(
                    styles['input'],
                    styles['input--line'],
                )
                }
            />
            {children}
        </>

    )
}

export default Input