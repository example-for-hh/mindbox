export type TListTodos = {
    id: number,
    title: string,
    isOpened: boolean,
    todos: TTodoItem[]
    filterSelected: string
}

export type TTodoItem = {
    id: number,
    title: string
    checked: boolean
}

export type TPayloadItem = {
    listId: number,
    itemId: number
}

export type TFilter = {
    [key: string]: string
}