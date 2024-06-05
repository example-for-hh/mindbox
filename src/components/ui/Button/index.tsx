import { FC, ButtonHTMLAttributes } from "react"

import classNames from "classnames"

import styles from './styles.module.scss'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string | React.ReactNode,
    typeText?: boolean,
    children?: React.ReactNode
}

const Button: FC<TButtonProps> = ({ typeText = false, type = 'button', ...rest }) => {

    const { text, className, children, ...attr } = rest

    return (
        <>
            <button
                type={type}

                className={classNames(
                    styles['btn'],
                    typeText && styles['btn--text'],
                    className && className,
                )}
                {...attr}
            >
                {text && <span className={styles['btn__text']} >{text}</span>}
                {children && children}
            </button>
        </>

    )
}
export default Button;
