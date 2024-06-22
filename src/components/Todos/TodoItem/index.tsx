import { FC } from 'react'
import InputCheckbox from '@components/ui/InputCheckbox'
import { useAppDispatch } from '@src/hooks/redux'

import { TTodoItem } from '@src/types'
import { deleteTodo, toggleItem } from '@store/todos/slice'
import { IconRemove } from '@components/ui/Icons'

import { TodoItemStyled } from '../styled'

type TTodoItemProps = {
    listId: number,
    todoItem: TTodoItem
}


const TodoItem: FC<TTodoItemProps> = ({ listId, todoItem }) => {

    const dispatch = useAppDispatch()


    return (


        <TodoItemStyled>
            <InputCheckbox
                title={todoItem.title}
                checked={todoItem.checked}
                onClick={() => dispatch(
                    toggleItem({
                        id: todoItem.id,
                        listId,
                    })
                )} />

            <IconRemove
                width={20}
                height={20}
                type='remove'
                onClick={() => dispatch(
                    deleteTodo({
                        listId,
                        id: todoItem.id
                    })
                )} />
        </TodoItemStyled>



    )
}

export default TodoItem;