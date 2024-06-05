import { FC } from "react";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from 'yup';
import Modal from "..";
import ModalBody from "../ModalBody";
import Button from "@components/ui/Button";
import ModalTitle from "../ModalTitle";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";

import { useAppSelector, useAppDispatch } from "@src/hooks/redux";

import { selectModalByType } from "@store/modal/selectors";
import { MODAL_ADD_TODOS } from "@vars/modal";
import { modalToggle } from "@store/modal/slice";
import FormControl from "@components/ui/FormControl";
import Input from "@components/ui/Input";
import FormError from "@components/ui/FormError";
import { addItem } from "@store/todos/slice";

const ModalAddTodos: FC = () => {

    const dispatch = useAppDispatch()

    const modal = useAppSelector(selectModalByType(MODAL_ADD_TODOS))

    if (!modal) {
        return null;
    }

 
    const handleClose = () => {
        dispatch(modalToggle({ modalType: MODAL_ADD_TODOS }))
    }


    const handleSubmut = (values: FormikValues) => {
        dispatch(addItem({
            listId: modal.modalProps.listId,
            title: values.title,
        }))

        setTimeout(() => handleClose(), 200)
    }

    const initialValues = {
        title: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().typeError('Это поле должно быть строкой').required('Это поле обязательно для заполнения'),
    });

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmut(values)}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleSubmit,
                    } = props;

                    return (
                        <Modal onCloseModal={handleClose}>
                            <Form onSubmit={handleSubmit}>
                                <ModalHeader>
                                    <ModalTitle title={modal.modalTitle} />
                                </ModalHeader>
                                <ModalBody>
                                    <FormControl>
                                        <Input
                                            name='title'
                                            type='text'
                                            placeholder='Заголовок списка'
                                            onChange={handleChange}
                                            value={values['title']}
                                            error={touched['title'] && errors['title'] ? true : false}
                                        />
                                        {touched['title'] && errors['title'] && <FormError name='title' />}
                                    </FormControl>

                                </ModalBody>
                                <ModalFooter>

                                    <Button type="submit" text='Сохранить' onSubmit={() => handleSubmit} />

                                    <Button text='Закрыть' onClick={handleClose} />
                                </ModalFooter>
                            </Form>
                        </Modal>
                    );
                }}
            </Formik>
        </>
    );
};

export default ModalAddTodos
    ;