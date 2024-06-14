import { FC } from 'react'
import InputCheckbox from '@components/ui/InputCheckbox'
import { useAppDispatch } from '@src/hooks/redux'

import { TTodoItem } from '@src/types'
import { removeItem, toggleItem } from '@store/todos/slice'
import { IconRemove } from '@components/ui/Icons'

import { TodoItemStyled } from '../styled'

type TTodoItemProps = {
    listId: number,
    todoItem: TTodoItem
}


const TodoItem: FC<TTodoItemProps> = ({ listId, todoItem }) => {

    const dispatch = useAppDispatch()


    return (


        <TodoItemStyled
            onClick={() => dispatch(
                toggleItem({
                    listId,
                    itemId: todoItem.id
                })
            )}

        >
            <InputCheckbox title={todoItem.title} checked={todoItem.checked} />

            <IconRemove
                width={20}
                height={20}
                type='remove'
                onClick={() => dispatch(
                    removeItem({
                        listId,
                        itemId: todoItem.id
                    })
                )} />
        </TodoItemStyled>



    )
}

export default TodoItem;