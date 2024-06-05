import { FC } from 'react'

import classNames from 'classnames'


import IconArrow from '@components/ui/Icons/IconArrow'


import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { selectTodos } from '@store/todos/selectors'
import { TListTodos } from '@src/types'
import { removeList, toggleList } from '@store/todos/slice'

import { modalToggle } from '@store/modal/slice'
import { MODAL_ADD_TODOS } from '@vars/modal'


import TodoActiveCount from '../TodoActiveCount'


import TodoFilter from '../TodoFilter'
import TodoItems from '../TodoItems'
import TodoClear from '../TodoClear'


import { IconRemove } from '@components/ui/Icons'


import styles from '../styles.module.scss'

const TodoBody: FC = () => {

    const dispatch = useAppDispatch()

    const todos: TListTodos[] = useAppSelector(selectTodos)

    return (

        <div className={styles['todos__body']}>
            {todos.map((list) => (
                <div
                    className={
                        classNames(
                            styles['todos__item'],
                            list.isOpened && styles['todos__item--opened']
                        )
                    }
                    key={list.id}

                >
                    <div className={styles['todos__title']} >
                        <IconArrow
                            className={classNames(styles['todos__icon'], styles['todos__icon--arrow'])}
                            width={20}
                            height={20}
                            onClick={() => dispatch(toggleList(list.id))}
                        />

                        <span onClick={() => dispatch(toggleList(list.id))}>{list.title}</span>

                        <IconRemove
                            width={20}
                            height={20}
                            className={classNames(styles['todos__icon'], styles['todos__icon--add'])}
                            onClick={() => dispatch(
                                modalToggle({
                                    modalType: MODAL_ADD_TODOS,
                                    modalProps: {
                                        listId: list.id
                                    }
                                }))}
                        />

                        <IconRemove
                            width={20}
                            height={20}
                            className={classNames(styles['todos__icon'], styles['todos__icon--remove'])}
                            onClick={() => dispatch(removeList(list.id))} />


                    </div>
                    {list.isOpened &&
                        <div className={styles['todos__jobs']}>

                            <TodoItems listId={list.id} />
                        </div>
                    }
                    <div className={styles['todos__bottom']}>
                        <TodoActiveCount listId={list.id} />
                        <TodoFilter listId={list.id} />
                        <TodoClear listId={list.id} />
                    </div>
                </div>
            ))}
        </div>

    )
}

export default TodoBody;