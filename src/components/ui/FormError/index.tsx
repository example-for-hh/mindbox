import { FC } from "react";
import styles from './styles.module.scss'
import { ErrorMessage } from "formik";

const FormError: FC<{ name: string }> = ({ name }) => {


    return (
        <>
            <div className={styles['error']}>
                <ErrorMessage name={name} />
            </div>

        </>
    )
}

export default FormError