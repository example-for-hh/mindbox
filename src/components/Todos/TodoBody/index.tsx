import { FC } from 'react'

import IconArrow from '@components/ui/Icons/IconArrow'


import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { selectTodos } from '@store/todos/selectors'
import { TListTodoClient } from '@src/types'
import { removeList, toggleList } from '@store/todos/slice'

import { modalToggle } from '@store/modal/slice'
import { MODAL_ADD_TODOS } from '@vars/modal'


import TodoActiveCount from '../TodoActiveCount'


import TodoFilter from '../TodoFilter'
import TodoItems from '../TodoItems'
import TodoClear from '../TodoClear'


import { IconRemove } from '@components/ui/Icons'

import {
    ToboBodyStyled,
    TodoBottom,
    TodoItem,
    TodoJobs,
    TodoTitle,
    TodoTitleSpan,
    TodoWrapperIcons
} from '../styled'
import Title from '@components/ui/Title'

const TodoBody: FC = () => {

    const dispatch = useAppDispatch()

    const todos: TListTodoClient[] = useAppSelector(selectTodos)

    return (

        <ToboBodyStyled>
            {todos.length > 0 ? todos.map((list) => (
                <TodoItem
                    $isOpened={list.isOpened}
                    key={list.id}

                >
                    <TodoTitle>
                        <IconArrow
                            width={20}
                            height={20}
                            onClick={() => dispatch(toggleList(list.id))}
                        />

                        <TodoTitleSpan onClick={() => dispatch(toggleList(list.id))}>{list.title}</TodoTitleSpan>

                        <TodoWrapperIcons>
                            <IconRemove
                                width={20}
                                height={20}
                                type='add'
                                onClick={() => dispatch(
                                    modalToggle({
                                        modalType: MODAL_ADD_TODOS,
                                        modalProps: {
                                            listId: list.id
                                        }
                                    }))}
                            />

                            <IconRemove
                                width={20}
                                height={20}
                                type='remove'
                                onClick={() => dispatch(removeList(list.id))} />


                        </TodoWrapperIcons>


                    </TodoTitle>
                    {list.isOpened &&
                        <TodoJobs>
                            <TodoItems listId={list.id} />
                        </TodoJobs>
                    }
                    <TodoBottom>
                        <TodoActiveCount listId={list.id} />
                        <TodoFilter listId={list.id} />
                        <TodoClear listId={list.id} />
                    </TodoBottom>
                </TodoItem>
            )) : <Title title="Список задач пуст" type='h2' />}

        </ToboBodyStyled>

    )
}

export default TodoBody;