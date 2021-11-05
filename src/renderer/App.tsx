import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/main';

const EntryPoint = () => {
  return (
    <div>
      <Main />
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
