export * from './thunks'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilter, TListTodo, TListTodoClient, TTodoItem } from '@src/types';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_ARCHIVE } from '@src/vars';
import { addList, createTodo, deleteTodo, fetchLists, removeList, toggleItem } from './thunks';


export const todosFilters: TFilter = {
    ALL: FILTER_ALL,
    ACTIVE: FILTER_ACTIVE,
    ARCHIVE: FILTER_ARCHIVE
}


const initialState: TListTodoClient[] = []

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        toggleList: (state, action: PayloadAction<number>) => {

            const list = state.find(list => list.id === action.payload)

            if (list) {
                list.isOpened = !list.isOpened
            }

        },

        filterBy(state, action: PayloadAction<{ listId: number, selected: string }>) {

            const { listId, selected } = action.payload

            const list = state.find(list => list.id === listId)

            if (list) {

                list.selectedFilter = selected
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
    extraReducers: (builder) => {

        builder.addCase(
            fetchLists.fulfilled,
            (_, action: PayloadAction<TListTodoClient[]>) => {
                return action.payload;
            });

        builder.addCase(
            addList.fulfilled,
            (state, action: PayloadAction<{ id: number; title: string; todos: TTodoItem[] }>) => {
                const { id, title, todos } = action.payload;

                const newList: TListTodoClient = {
                    id,
                    title,
                    isOpened: false,
                    todos,
                    selectedFilter: todosFilters.ALL,
                };

                state.push(newList);
            }
        );

        builder.addCase(
            removeList.fulfilled,
            (state, action: PayloadAction<number>) => {
                return state.filter(list => list.id !== action.payload);
            });

        builder.addCase(
            createTodo.fulfilled,
            (state, action: PayloadAction<TTodoItem & { listId: number }>) => {

                const { id, title, checked, listId } = action.payload;

                const list = state.find((list) => list.id === listId);

                if (list) {
                    list.todos.push({
                        id,
                        title,
                        checked
                    });
                }
            });

        builder.addCase(
            deleteTodo.fulfilled,
            (state, action: PayloadAction<{ id: number; listId: number }>) => {

                const { id, listId } = action.payload;

                const list = state.find(list => list.id === listId);

                if (list) {
                    list.todos = list.todos.filter(todo => todo.id !== id);
                }
            });


        builder.addCase(
            toggleItem.fulfilled,
            (state, action: PayloadAction<{ id: number, listId: number }>) => {
                const { id, listId } = action.payload;

                const list = state.find(list => list.id === listId);

                if (list) {
                    const item = list.todos.find((todo: { id: number }) => todo.id === id);

                    if (item) {
                        item.checked = !item.checked;
                    }
                }
            }
        );
    }
});

export const {
    toggleList,
    filterBy,
    clearTodos
} = todosSlice.actions;

export default todosSlice.reducer;