import { useAppSelector, useAppDispatch } from './reducers/hooks';
import { decrement, increment } from './actions/counterSlice';
import { incrementByTwo, decrementByTwo } from './apis/counter';

const Counter = () => {
  const { value: count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(incrementByTwo(count))}>
          +2
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => dispatch(decrementByTwo(count))}>
          -2
        </button>
        {status === 'loading' ? <p>Loading...</p> : null}
      </div>
    </div>
  );
};

export default Counter;
