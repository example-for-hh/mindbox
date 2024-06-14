import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { filterBy, todosFilters } from '@store/todos/slice'
import { selectActiveFilterByListId } from '@store/todos/selectors'

import { TodoActions, TodoSpan } from '../styled'


const TodoFilter: FC<{ listId: number }> = ({ listId }) => {

    const dispatch = useAppDispatch()

    const currentFilter = useAppSelector(selectActiveFilterByListId(listId))


    const [selectedFilter, setSelectedFilter] = useState(currentFilter || todosFilters.ALL)


    const handleFilterClick = (filter: string) => {

        dispatch(filterBy({ listId, selected: filter }))
        setSelectedFilter(filter)

    }

    return (

        <TodoActions>
            <TodoSpan
                $active={selectedFilter === todosFilters.ALL ? true : false}
                onClick={() => handleFilterClick(todosFilters.ALL)}
            >
                All
            </TodoSpan>
            <TodoSpan
                $active={selectedFilter === todosFilters.ACTIVE ? true : false}
                onClick={() => handleFilterClick(todosFilters.ACTIVE)}
            >
                Active
            </TodoSpan>
            <TodoSpan
                $active={selectedFilter === todosFilters.ARCHIVE ? true : false}
                onClick={() => handleFilterClick(todosFilters.ARCHIVE)}
            >
                Archive
            </TodoSpan>
        </TodoActions>


    )
}

export default TodoFilter;