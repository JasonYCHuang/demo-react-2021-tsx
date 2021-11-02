import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './counter';
import { useGetPokemonByNameQuery } from './services/pokemon';


const PokeMon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}

const EntryPoint = () => {
  return (
    <div>
      <Counter />
      <PokeMon />
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
