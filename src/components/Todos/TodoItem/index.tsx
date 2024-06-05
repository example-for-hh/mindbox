import { FC } from 'react'
import classNames from 'classnames'
import InputCheckbox from '@components/ui/InputCheckbox'
import { useAppDispatch } from '@src/hooks/redux'

import { TTodoItem } from '@src/types'
import { removeItem, toggleItem } from '@store/todos/slice'
import { IconRemove } from '@components/ui/Icons'

import styles from '../styles.module.scss'

type TTodoItemProps = {
    listId: number,
    todoItem: TTodoItem
}

const TodoItem: FC<TTodoItemProps> = ({ listId, todoItem }) => {

    const dispatch = useAppDispatch()


    return (


        <div
            className={styles['todos__jobsItem']}
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
                className={classNames(styles['todos__icon'], styles['todos__icon--remove'])}
                onClick={() => dispatch(
                    removeItem({
                        listId,
                        itemId: todoItem.id
                    })
                )} />
        </div>



    )
}

export default TodoItem;