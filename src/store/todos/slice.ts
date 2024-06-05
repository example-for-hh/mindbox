import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilter, TListTodos, TPayloadItem, TTodoItem } from '@src/types';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_ARCHIVE } from '@src/vars';



export const todosFilters: TFilter = {
    ALL: FILTER_ALL,
    ACTIVE: FILTER_ACTIVE,
    ARCHIVE: FILTER_ARCHIVE
}

const initialState: TListTodos[] = [
    {
        id: 1,
        title: 'what needs to be done',
        isOpened: true,
        filterSelected: todosFilters.ALL,
        todos: [
            {
                id: 1,
                title: 'Тестовое задание',
                checked: false,
            },
            {
                id: 2,
                title: 'Прекрасный код',
                checked: true,
            },
            {
                id: 3,
                title: 'Прекрасный кодe',
                checked: false,
            }
        ]
    },
    {
        id: 2,
        title: 'what needs to be done',
        isOpened: false,
        filterSelected: todosFilters.ALL,
        todos: [
            {
                id: 1,
                title: 'Тестовое задание',
                checked: false,
            },
            {
                id: 2,
                title: 'Прекрасный код',
                checked: true,
            },
            {
                id: 3,
                title: 'Прекрасный кодe',
                checked: false,
            }
        ]

    },

]

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toggleList: (state: TListTodos[], action: PayloadAction<number>) => {

            const list = state.find(list => list.id === action.payload)

            if (list) {
                list.isOpened = !list.isOpened
            }

        },

        removeList: (state: TListTodos[], action: PayloadAction<number>) => {

            return state.filter(list => list.id !== action.payload);

        },

        toggleItem: (state: TListTodos[], action: PayloadAction<TPayloadItem>) => {

            const { listId, itemId } = action.payload

            const list = state.find(list => list.id === listId)

            if (list) {
                const item = list.todos.find(todo => todo.id === itemId)

                if (item) {
                    item.checked = !item.checked;
                }
            }
        },
        removeItem: (state: TListTodos[], action: PayloadAction<TPayloadItem>) => {

            const { listId, itemId } = action.payload

            const list = state.find(list => list.id === listId)

            if (list) {
                list.todos = list.todos.filter(todo => todo.id !== itemId);
            }
        },

        addItem: (state: TListTodos[], action: PayloadAction<any>) => {

            const { listId, title } = action.payload;

            const list = state.find(list => list.id === listId)

            if (list) {

                const newId = list.todos.length ? list.todos[list.todos.length - 1].id + 1 : 1;

                list.todos.push({
                    id: newId,
                    title: 'Прекрасный кsdsadasdasодe',
                    checked: false,
                });
            }
        },
        addList: (state, action: PayloadAction<{ title: string; todos: TTodoItem[] }>) => {

            const { title, todos } = action.payload;

            const newList: TListTodos = {
                id: state.length ? state[state.length - 1].id + 1 : 1,
                title,
                isOpened: false,
                todos: todos.map((todo, index) => ({
                    ...todo,
                    id: index + 1
                })),
                filterSelected: todosFilters.ALL,
            }

            state.push(newList)
        },

        filterBy(state, action: PayloadAction<{ listId: number, selected: string }>) {

            const { listId, selected } = action.payload

            const list = state.find(list => list.id === listId)

            if (list) {

                list.filterSelected = selected
            }
        },

        clearTodos(state, action: PayloadAction<{ listId: number }>) {

            const { listId } = action.payload

            const list = state.find(list => list.id === listId)

            if (list) {

                list.todos = []
            }
        }

    },
});

export const {
    toggleList,
    toggleItem,
    removeItem,
    removeList,
    addItem,
    addList,
    filterBy,
    clearTodos
} = todosSlice.actions;

export default todosSlice.reducer;