import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';


export const getCounter = (state: StateSchema) => state.counter