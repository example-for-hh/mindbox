import { FC, useState } from 'react'



import { useAppDispatch, useAppSelector } from '@src/hooks/redux'

import { filterBy, todosFilters } from '@store/todos/slice'

import styles from '../styles.module.scss'
import { selectActiveFilterByListId } from '@store/todos/selectors'

const TodoFilter: FC<{ listId: number }> = ({ listId }) => {

    const dispatch = useAppDispatch()

    const currentFilter = useAppSelector(selectActiveFilterByListId(listId))


    const [selectedFilter, setSelectedFilter] = useState(currentFilter || todosFilters.ALL)


    const handleFilterClick = (filter: string) => {

        dispatch(filterBy({ listId, selected: filter }))
        setSelectedFilter(filter)

    }

    return (

        <div className={styles['todos__actions']}>
            <span
                className={selectedFilter === todosFilters.ALL ? styles['todos__active'] : ''}
                onClick={() => handleFilterClick(todosFilters.ALL)}
            >
                All
            </span>
            <span
                className={selectedFilter === todosFilters.ACTIVE ? styles['todos__active'] : ''}
                onClick={() => handleFilterClick(todosFilters.ACTIVE)}
            >
                Active
            </span>
            <span
                className={selectedFilter === todosFilters.ARCHIVE ? styles['todos__active'] : ''}
                onClick={() => handleFilterClick(todosFilters.ARCHIVE)}
            >
                Archive
            </span>
        </div>


    )
}

export default TodoFilter;