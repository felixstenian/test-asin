import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import {
  getAllPokemonBase,
  sendPokemon,
  getAllPokemon,
} from '../../services/api.services';
import { Container, Button } from './styles';

function Dashboard() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [start, setStart] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getAllPokemonBase().then(response => {
      return response.data.count === 0
        ? setStart(true)
        : setPokemonsData(response.data);
    });
  }, []);

  useEffect(() => {
    if (start) {
      getAllPokemon({ offset }).then(response => {
        const { data } = response;
        sendPokemon({ data });
        setStart(false);
      });
    }
  }, [start, offset]);

  async function handlePlus() {
    setOffset(pokemonsData.count + 20);
    setStart(true);
  }

  return (
    <Container>
      <div className="container">
        <Header quantity={pokemonsData?.count} />
        <h1 data-cy="page-title">PokeDex</h1>

        <div className="pokemon-card-wrapper">
          {pokemonsData.results?.map(pokemon => (
            <Link to={`/profile/${pokemon.id}`} key={pokemon.id}>
              <Card
                key={pokemonsData.results.indexOf(pokemon)}
                name={pokemon.name}
                url={pokemon.url}
              />
              )
            </Link>
          ))}
        </div>
        <Button type="submit" onClick={handlePlus}>
          Mais
        </Button>
      </div>
    </Container>
  );
}

export default Dashboard;
