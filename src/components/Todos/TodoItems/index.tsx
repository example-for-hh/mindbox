import { FC } from 'react'
import { useAppSelector } from '@src/hooks/redux'
import {  todosFilters } from '@store/todos/slice'

import { selectActiveFilterByListId, selectTodosByListId } from '@store/todos/selectors'
import TodoItem from '../TodoItem'

type TTodoItemProps = {
    listId: number,
}

const TodoItems: FC<TTodoItemProps> = ({ listId }) => {

    const todos = useAppSelector(selectTodosByListId(listId))

    const selectedFilter = useAppSelector(selectActiveFilterByListId(listId))

    const filteredTodo = () => {
        if (selectedFilter === todosFilters.ACTIVE) {
            return todos.filter(todo => todo.checked === false)
        }
        if (selectedFilter === todosFilters.ARCHIVE) {
            return todos.filter(todo => todo.checked === true)
        }

        return todos;
    }

    return (
        <>
            {filteredTodo().map((todo) => (
                <TodoItem listId={listId} todoItem={todo} key={todo.id} />
            ))}
        </>
    );
}

export default TodoItems;