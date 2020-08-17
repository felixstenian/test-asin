import React, { useEffect, useState } from 'react';

import { getSinglePokemon } from '../../services/api.services';

// import { Container } from './styles';

function Profile({ match }) {
  const [pokemonData, setPokemonData] = useState({
    name: 'loading',
  });

  useEffect(() => {
    const { id } = match.params;

    getSinglePokemon({ id }).then(response => setPokemonData(response.data));
  }, [match]);

  return <div>{pokemonData.name}</div>;
}

export default Profile;
