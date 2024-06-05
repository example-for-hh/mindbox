import { FC, InputHTMLAttributes } from "react"

import classNames from "classnames"
import { IconCheckbox } from "../Icons"

import styles from './styles.module.scss'


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    title: string
    children?: React.ReactNode
}

const InputCheckbox: FC<InputProps> = ({ title, children, className, ...rest }) => {

    const { ...attr } = rest

    return (
        <>

            <input
                className={classNames(styles['checkbox'], styles['checkbox--checked'])}
                {...attr}
                readOnly 
                type="checkbox"
            />
            <label className={styles['checkbox__label']}>
                <IconCheckbox />
                <span className={styles['checkbox__title']}>{title}</span>
            </label>

        </>
    )
};


export default InputCheckbox;
