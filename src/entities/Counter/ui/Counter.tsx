import { useSelector,useDispatch } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { counterActions } from "../model/slice/CounterSlice";

import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";



export const Counter = () => {

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    function increment()  {
        dispatch(counterActions.increment())
    }

    function decrement()  {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid = 'value-title'>{counterValue}</h1>
            <Button 
            onClick={decrement}
            data-testid = 'decrement-btn'
            >-</Button>
            <Button 
            data-testid = 'increment-btn'
            onClick={increment}>+</Button>
        </div>
    )
}

