import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';



export const selectTodos = (state: RootState) => state.todos

export const selectListById = (listId: number) => createSelector(
    [selectTodos],
    (todos) => {
        return todos.find(list => list.id === listId)
    }
);

export const selectActiveFilterByListId = (listId: number) => createSelector(
    [selectListById(listId)],
    (list) => {
        return list?.selectedFilter;
    }
);


export const selectTodosByListId = (listId: number) => createSelector(
    [selectListById(listId)],
    (list) => {
        return list ? list.todos : [];
    }
);

export const selectActiveTodosCountByList = createSelector(
    [selectTodos],
    (todos) => {
        return todos.reduce((acc, list) => {

            const activeCount = list.todos.filter(todo => !todo.checked).length

            acc[list.id] = activeCount

            return acc

        }, {} as { [key: number]: number });
    }
);