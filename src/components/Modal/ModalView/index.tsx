import React, { FC } from "react";
import { useSelector } from "react-redux";
// import { TStateReducerModal } from "@src/types/modal";
import { selectIsOpenModals } from "@store/modal/selectors";
import { modalComponents } from "@components/Modal/settings";

import styles from '../styles.module.scss';

const ModalView: FC = () => {

    const isOpenModals: any[] = useSelector(selectIsOpenModals(true))

    return (
        <>
            {isOpenModals.map((modalView, index) => {
                const ModalComponent = modalComponents[modalView.modalType]; // Получите компонент по идентификатору
                return (
                    <div
                        className={styles['modal__view']}

                        key={index}
                    >
                        {ModalComponent && <ModalComponent props={modalView.props ?? null} />}
                    </div>
                );
            })}
        </>
    );
};

export default ModalView