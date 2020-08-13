import api from './api';

const getAllPokemon = async () => {
  const response = await api.get('/pokemon');

  return response;
};

const getSinglePokemon = async ({ id }) => {
  const response = await api.get(`/pokemon/${id}`);

  return response;
};

export { getAllPokemon, getSinglePokemon };
