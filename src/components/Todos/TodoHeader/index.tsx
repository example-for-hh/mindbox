import { FC } from 'react'
import classNames from 'classnames'
import { IconRemove } from '@components/ui/Icons'


import { modalToggle } from '@store/modal/slice'
import { MODAL_ADD_LIST } from '@vars/modal'
import { useAppDispatch } from '@src/hooks/redux'

import styles from '../styles.module.scss'


const TodoHeader: FC<{ children: React.ReactNode }> = ({ children }) => {

    const dispatch = useAppDispatch()

    return (

        <>
            <div className={styles['todos__header']}>
                {children && children}
                <IconRemove
                    width={20}
                    height={20}
                    className={classNames(styles['todos__icon'], styles['todos__icon--add'])}
                    onClick={() => dispatch(modalToggle({ modalType: MODAL_ADD_LIST }))} />
            </div>

        </>

    )
}

export default TodoHeader;