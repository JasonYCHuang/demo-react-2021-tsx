import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './counter';

const EntryPoint = () => {
  return (
    <div>
      <Counter />
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
