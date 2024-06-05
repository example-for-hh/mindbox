import { FC } from "react";


const ModalTitle: FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <h3>{title}</h3>
        </>
    )
}

export default ModalTitle