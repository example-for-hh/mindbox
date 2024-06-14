import { FC } from 'react'
import { useAppDispatch } from '@src/hooks/redux'
import { clearTodos } from '@store/todos/slice'
import { TodoClearStyled } from '../styled'

type TTodoClearProps = {
    listId: number,
    text?: string
}

const TodoClear: FC<TTodoClearProps> = ({ listId, text = 'Clear completed' }) => {

    const dispatch = useAppDispatch()

    return (

        <TodoClearStyled onClick={() => dispatch(clearTodos({ listId }))}>
            {text}
        </TodoClearStyled>


    )
}

export default TodoClear;