import { FC } from 'react'
import { useAppSelector } from '@src/hooks/redux'
import { todosFilters } from '@store/todos/slice'

import { selectActiveFilterByListId, selectTodosByListId } from '@store/todos/selectors'
import TodoItem from '../TodoItem'
import { TodoEmpty } from '../styled'

type TTodoItemProps = {
    listId: number,
}

const TodoItems: FC<TTodoItemProps> = ({ listId }) => {

    const todos = useAppSelector(selectTodosByListId(listId))

    const selectedFilter = useAppSelector(selectActiveFilterByListId(listId))

    const filteredTodo = () => {
        if (selectedFilter === todosFilters.ACTIVE) {
            return todos.filter(todo => !todo.checked)
        }
        if (selectedFilter === todosFilters.ARCHIVE) {
            return todos.filter(todo => todo.checked)
        }

        return todos;
    }

    return (
        <>
            {todos && todos.length > 0
                ?
                filteredTodo().map((todo) => (
                    <TodoItem listId={listId} todoItem={todo} key={todo.id} />
                ))
                : <TodoEmpty>Список задач пока пустой</TodoEmpty>
            }
        </>
    );
}

export default TodoItems;