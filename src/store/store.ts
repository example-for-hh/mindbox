import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import { todosSlice } from './todos/slice';
import { modalSlice } from './modal/slice';


const reducers = {
    [todosSlice.name]: todosSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
};

const rootReducer = combineReducers(reducers);


export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];


export type RootState = ReturnType<typeof rootReducer>


