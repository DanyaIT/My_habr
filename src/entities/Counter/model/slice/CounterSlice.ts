import {createSlice} from '@reduxjs/toolkit'
import { CounterSchema } from '../type/CounterSchema'


const initialState: CounterSchema = {
    value: 0,
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state) => {
            state.value += 1
        },

        decrement:(state) => {
            state.value -= 1
        }
        
    }
})


export const {actions: counterActions} = CounterSlice;
export const {reducer: counterReducer} = CounterSlice;