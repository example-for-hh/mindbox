import { FC } from "react";
import styles from './styles.module.scss'

type TFormControlProps = {
    children: React.ReactNode,
}

const FormControl: FC<TFormControlProps> = ({ children }) => {

    return (
        <div className={styles['form__control']}>
            {children}
        </div>
    )
}

export default FormControl