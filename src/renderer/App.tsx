import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './counter';
import ZoomI from './d3_zoom';
import BrushChart from './d3_brush';

const EntryPoint = () => {
  return (
    <div>
      <Counter />
      <ZoomI width={400} height={300} />
      <BrushChart width={800} height={600} />
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
