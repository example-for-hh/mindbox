import { FC } from 'react'
import { useAppSelector } from '@src/hooks/redux'
import { selectActiveTodosCountByList } from '@store/todos/selectors'
import { TodoActive } from '../styled'

const TodoActiveCount: FC<{ listId: number }> = ({ listId }) => {

    const activeTodosCountByList = useAppSelector(selectActiveTodosCountByList);

    return (
        <TodoActive>
            {activeTodosCountByList[listId]} items left
        </TodoActive>

    )
}

export default TodoActiveCount;