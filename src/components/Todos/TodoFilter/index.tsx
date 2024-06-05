import { FC } from 'react'



import { useAppDispatch } from '@src/hooks/redux'

import { filterBy, todosFilters } from '@store/todos/slice'

import styles from '../styles.module.scss'

const TodoFilter: FC<{ listId: number }> = ({ listId }) => {

    const dispatch = useAppDispatch()


    return (

        <div className={styles['todos__actions']}>
            <span onClick={() => dispatch(filterBy({ listId: listId, selected: todosFilters.ALL }))}>All</span>
            <span onClick={() => dispatch(filterBy({ listId: listId, selected: todosFilters.ACTIVE }))}>Achive</span>
            <span onClick={() => dispatch(filterBy({ listId: listId, selected: todosFilters.ARCHIVE }))}>Active</span>
        </div>


    )
}

export default TodoFilter;