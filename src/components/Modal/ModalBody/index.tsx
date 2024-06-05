import { FC } from "react";
import styles from '../styles.module.scss';

const ModalBody: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div className={styles['modal__body']}>
                {children}
            </div>
        </>
    )
}

export default ModalBody