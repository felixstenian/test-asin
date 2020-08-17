import React, { useEffect, useState } from 'react';

import {
  getSinglePokemon,
  getSinglePokemonBase,
  sendPokemonData,
} from '../../services/api.services';
import { replaceAll, numberWith3Digits } from '../../util';
import { Container } from './styles';

function Card({ url }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    getSinglePokemonBase().then(response => {
      return response.data.count === 0
        ? setStart(true)
        : setPokemonData(response.data);
    });
  }, []);

  useEffect(() => {
    const [, splitedId] = url?.split('pokemon');
    const id = replaceAll({
      string: splitedId,
      search: '/',
      replace: '',
    });

    getSinglePokemon({ id }).then(response => {
      const { data } = response;
      sendPokemonData({ data });
      setStart(false);
    });
  }, [start, url]);

  return (
    <Container>
      {pokemonData?.map(pokemon => {
        return (
          <div
            className={
              pokemon?.types?.length
                ? `pokemon-card ${pokemon?.types[0].type.name}`
                : 'pokemon-card'
            }
            key={pokemon.id}
          >
            <div className="content">
              <span className="id">#{numberWith3Digits(pokemon?.id)}</span>
              <strong>{pokemon?.name}</strong>
              {pokemon?.types?.map(pokemonType => (
                <p key={pokemon?.types?.indexOf(pokemonType)} className="types">
                  {pokemonType?.type.name}
                </p>
              ))}
            </div>
            <img
              src={pokemon?.sprites?.front_default}
              alt={`front sprite of ${pokemon?.name}`}
            />
          </div>
        );
      })}
    </Container>
  );
}

export default Card;
