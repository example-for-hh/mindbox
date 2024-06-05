import { FC } from "react";
import styles from '../styles.module.scss';

const ModalHeader: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div className={styles['modal__header']}>
                {children}
            </div>
        </>
    )
}

export default ModalHeader