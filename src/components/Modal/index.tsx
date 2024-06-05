import { FC, useRef } from "react";
import classNames from "classnames";
// import { IconClose } from '@components/ui/Icons';



import styles from './styles.module.scss';
import Button from "@components/ui/Button";
import { IconClose } from "@components/ui/Icons";


type TModalProps = {
    children: React.ReactNode,
    className?: string
    onCloseModal?: () => void
}


const Modal: FC<TModalProps> = ({ children, className, onCloseModal }) => {

    const modalRef = useRef<HTMLDivElement>(null)




    return (
        <>

            <div className={styles['modal']}
            >
                <div className={
                    classNames(
                        styles['modal__content'],
                        className && styles[`modal__content--${className}`]
                    )}

                    ref={modalRef}
                >
            
                    <Button className={styles['modal__close']} onClick={onCloseModal}>
                        <IconClose />
                    </Button>
                    {children}
                </div>
            </div >


        </>
    )
}

export default Modal