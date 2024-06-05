import { TIconSvg } from "@src/types"
import { FC } from "react";

import styles from './styles.module.scss'

const IconCheckbox: FC<TIconSvg> = ({ ...rest }) => {


    return (
        <>

            <svg className={styles['checkmark']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" {...rest}>
                <circle className={styles['checkmark__circle']} cx="26" cy="26" r="25" fill="none"></circle>
                <path className={styles['checkmark__check']} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </svg>
        </>
    )
}

export default IconCheckbox;