import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
    reducer: {
        carrinho: carrinhoReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch