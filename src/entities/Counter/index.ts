import { CounterSchema } from "./model/types/CounterSchema";
import { Counter } from "./ui/Counter";
import { counterReducer } from "./model/slice/CounterSlice";
export {Counter,counterReducer};
export type {CounterSchema};