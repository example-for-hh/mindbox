import { FC } from 'react'

import styles from './styles.module.scss'

const Todos: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className={styles['todos']}>
            {children && children}
        </div>

    )
}

export default Todos;