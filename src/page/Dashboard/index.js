import React, { useState, useEffect } from 'react';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { getAllPokemon } from '../../services/api.services';

import './styles.css';

function Dashboard() {
  const [pokemonsData, setPokemonsData] = useState({});

  useEffect(() => {
    getAllPokemon().then(response => setPokemonsData(response.data));
  }, []);

  return (
    <div className="container">
      <Header quantity={pokemonsData?.count} />
      <h1 data-cy="page-title">PokeDex</h1>

      <div className="pokemon-card-wrapper">
        {pokemonsData?.results?.map(pokemon => (
          <Card
            key={pokemonsData.results.indexOf(pokemon)}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
