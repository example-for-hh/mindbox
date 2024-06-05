import { FC } from 'react'
import {  useAppSelector } from '@src/hooks/redux'
import { selectActiveTodosCountByList } from '@store/todos/selectors'

import styles from '../styles.module.scss'


const TodoActiveCount: FC<{ listId: number }> = ({ listId }) => {


    const activeTodosCountByList = useAppSelector(selectActiveTodosCountByList);
    return (


        <div className={styles['todos__active']}>
            {activeTodosCountByList[listId]} items left
        </div>



    )
}

export default TodoActiveCount;