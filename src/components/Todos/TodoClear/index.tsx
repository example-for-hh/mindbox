import { FC } from 'react'

import { useAppDispatch } from '@src/hooks/redux'

import { clearTodos, } from '@store/todos/slice'

import styles from '../styles.module.scss'

type TTodoClearProps = {
    listId: number,
    text?: string
}

const TodoClear: FC<TTodoClearProps> = ({ listId, text = 'Clear completed' }) => {

    const dispatch = useAppDispatch()

    return (

        <div
            className={styles['todos__clear']}
            onClick={() => dispatch(clearTodos({ listId }))}
        >
            {text}
        </div>


    )
}

export default TodoClear;