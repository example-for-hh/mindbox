import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectIsOpenModals } from "@store/modal/selectors";
import { modalComponents } from "@components/Modal/settings";

import { ModalViewStyled } from "../styled";

const ModalView: FC = () => {

    const isOpenModals: any[] = useSelector(selectIsOpenModals(true))

    return (
        <>
            {isOpenModals.map((modalView, index) => {

                const ModalComponent = modalComponents[modalView.modalType];

                return (
                    <ModalViewStyled key={index}>
                        {ModalComponent && <ModalComponent props={modalView.props ?? null} />}
                    </ModalViewStyled>
                );
            })}
        </>
    );
};

export default ModalView