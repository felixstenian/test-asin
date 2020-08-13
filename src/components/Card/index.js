import React, { useEffect, useState } from 'react';

import { getSinglePokemon } from '../../services/api.services';
import { replaceAll, numberWith3Digits } from '../../util';

import './styles.css';

function Card({ url }) {
  const [pokemonData, setPokemonData] = useState({
    name: 'loading',
  });

  useEffect(() => {
    const [, splitedId] = url?.split('pokemon');
    const id = replaceAll({
      string: splitedId,
      search: '/',
      replace: '',
    });

    getSinglePokemon({ id }).then(response => setPokemonData(response.data));
  }, [url]);

  return (
    <div
      className={
        pokemonData?.types?.length
          ? `pokemon-card ${pokemonData?.types[0].type.name}`
          : 'pokemon-card'
      }
    >
      <div className="content">
        <span className="id">#{numberWith3Digits(pokemonData?.id)}</span>
        <strong>{pokemonData?.name}</strong>
        {pokemonData?.types?.map(pokemonType => (
          <p key={pokemonData?.types?.indexOf(pokemonType)} className="types">
            {pokemonType?.type.name}
          </p>
        ))}
      </div>

      <img
        src={pokemonData?.sprites?.front_default}
        alt={`front sprite of ${pokemonData?.name}`}
      />
    </div>
  );
}

export default Card;
