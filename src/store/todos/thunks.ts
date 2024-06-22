import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "@src/lib/apolloClient";
import {
    ADD_LIST,
    ADD_TODO,
    DELETE_TODO,
    GET_LIST,
    REMOVE_LIST,
    UPDATE_TODO
} from "@src/graphql/todo";

import { TListTodo, TListTodoClient } from "@src/types";
import { todosFilters } from "./slice";

export const fetchLists = createAsyncThunk(
    'todos/fetchLists',
    async () => {
        try {
            const { data } = await client.query({ query: GET_LIST });
         
            const initial = data.lists.map((list: TListTodo): TListTodoClient => ({
                ...list,
                isOpened: true,
                selectedFilter: todosFilters.ALL,
            }));
            return initial;
        } catch (error) {
            console.error('Ошибка при получении списков:', error);
        }
    }
);

export const addList = createAsyncThunk(
    'todos/addList',
    async (newList: { title: string; todos: TListTodo[] }) => {
        try {
            const { data } = await client.mutate({
                mutation: ADD_LIST,
                variables: { input: newList },
            });
            return data.createList;
        } catch (error) {
            console.error('Ошибка при добавлении списка:', error);
            // throw error;
        }
    }
);

export const removeList = createAsyncThunk(
    'todos/removeList',
    async (id: number) => {
        try {
            const { data } = await client.mutate({
                mutation: REMOVE_LIST,
                variables: { id },
            });
            return data.deleteList; 
        } catch (error) {
            console.error('Ошибка при удалении списка:', error);
        }
    }
);

export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async (createTodo: { title: string; listId: number }) => {
        try {
            const { title, listId } = createTodo;
            const { data } = await client.mutate({
                mutation: ADD_TODO,
                variables: {
                    input: { title },
                    listId
                },
            });
            return data.createTodo;
        } catch (error) {
            console.error('Ошибка при создании задачи:', error);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (deleteTodo: { id: number; listId: number }) => {
        try {
            const { id, listId } = deleteTodo;
            const { data } = await client.mutate({
                mutation: DELETE_TODO,
                variables: { id, listId },
            });
            return data.deleteTodo;
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    }
);

export const toggleItem = createAsyncThunk(
    'todos/updateTodo',
    async ({ id, listId }: { id: number, listId: number }) => {
        try {
            const { data } = await client.mutate({
                mutation: UPDATE_TODO,
                variables: { id, listId },
            });
            return data.updateTodo;
        } catch (error) {
            console.error('Ошибка при обновлении задачи:', error);
        }
    }
);