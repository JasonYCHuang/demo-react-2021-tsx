import { useAppSelector, useAppDispatch } from './reducers/hooks'
import { decrement, increment } from './actions/counterSlice'
import { incrementByTwo, decrementByTwo } from './apis/counter';

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
    <div>
        <div>
            <button onClick={() => dispatch(incrementByTwo())}>
                +2
            </button>
            <button onClick={() => dispatch(increment())}>
                +
            </button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>
                -
            </button>
            <button onClick={() => dispatch(decrementByTwo())}>
                -2
            </button>
        </div>
    </div>
    )
}

export default Counter;