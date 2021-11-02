import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './counter';
import { 
  useGetPingQuery,
  usePostToIncrementMutation,
} from './services/calculator';

const Calculator = () => {
  const [toIncrement, {}] = usePostToIncrementMutation()
  const onIncrementClick = async () => {
    try {
      await toIncrement({ title, content, user: userId }).unwrap()
    } catch (err) {
      console.error('Failed to incremenet: ', err)
    }
  }

  return (
  <div>
      <div>
          <button
              aria-label="Increment +"
              onClick={() => dispatch(increment())}
          >
              Increment
          </button>
          <span>{count}</span>
          <button
          aria-label="Decrement -"
          onClick={() => dispatch(decrement())}
          >
              Decrement
          </button>
      </div>
  </div>
  )
}

const Ping = () => {
  const { data: rsp = 'XXX', error, isLoading } = useGetPingQuery('')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : rsp ? (
        <>
          <p>ping response...</p>
          <p>{rsp}</p>
        </>
      ) : null}
      <p></p>
    </div>
  )
}

const EntryPoint = () => {
  return (
    <div>
      <Counter />
      <Ping />
      <Calculator />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={EntryPoint} />
      </Switch>
    </Router>
  );
}
