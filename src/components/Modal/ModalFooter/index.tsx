import { FC } from "react";
import styles from '../styles.module.scss';

const ModalFooter: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div className={styles['modal__footer']}>
                {children}
            </div>
        </>
    )
}

export default ModalFooter