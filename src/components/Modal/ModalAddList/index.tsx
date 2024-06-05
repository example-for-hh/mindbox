import { FC } from "react";
import { Form, Formik, FieldArray, FormikValues } from "formik";
import * as Yup from 'yup';
import Modal from "..";
import ModalBody from "../ModalBody";
import Button from "@components/ui/Button";
import ModalTitle from "../ModalTitle";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";

import { useAppSelector, useAppDispatch } from "@src/hooks/redux";
import { selectModalByType } from "@store/modal/selectors";
import { MODAL_ADD_LIST } from "@vars/modal";
import { modalToggle } from "@store/modal/slice";
import FormControl from "@components/ui/FormControl";
import Input from "@components/ui/Input";
import FormError from "@components/ui/FormError";
import { addList } from "@store/todos/slice";

const ModalAddList: FC = () => {

    const dispatch = useAppDispatch()
    const modal = useAppSelector(selectModalByType(MODAL_ADD_LIST))

    if (!modal) {
        return null;
    }

    const handleClose = () => {
        dispatch(modalToggle({ modalType: MODAL_ADD_LIST }))
    }

    const handleSubmut = (values: FormikValues) => {
        dispatch(addList({
            title: values.title,
            todos: values.todos
        }))

        setTimeout(() => handleClose(), 200)
    }

    const initialValues = {
        title: '',
        todos: [{ title: '' }]
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().typeError('Это поле должно быть строкой').required('Это поле обязательно для заполнения'),
        todos: Yup.array()
            .of(
                Yup.object().shape({
                    title: Yup.string().required('Это поле обязательно для заполнения')
                })
            )
            .min(1, 'Минимум одна задача должна быть')
            .required('Это поле обязательно для заполнения')
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
                        handleBlur
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
                                    <FieldArray name="todos">
                                        {({ push, remove }) => (
                                            <div>
                                                {values.todos.map((todo, index) => (
                                                    <FormControl key={index}>
                                                        <Input
                                                            name={`todos.${index}.title`}
                                                            type='text'
                                                            placeholder={`Задача ${index + 1}`}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={todo.title}
                                                            error={touched.todos && touched.todos[index] && errors.todos && errors.todos[index] ? true : false}
                                                        />
                                                        {touched.todos && touched.todos[index] && errors.todos && errors.todos[index] && <FormError name={`todos.${index}.title`} />}
                                                        <Button type="button" onClick={() => remove(index)} typeText={true}>Удалить</Button>
                                                    </FormControl>
                                                ))}
                                                <Button type="button" onClick={() => push({ title: '' })} typeText={true}>Добавить задачу</Button>
                                            </div>
                                        )}
                                    </FieldArray>
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

export default ModalAddList;