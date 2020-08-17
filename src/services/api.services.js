import api from './api';
import baseApi from './baseAPI';

const getAllPokemonBase = async () => {
  const response = await baseApi.get('/pokemon');

  return response;
};

const sendPokemon = async ({ data }) => {
  const response = await baseApi.post('/pokemon', data);

  return response;
};

const getSinglePokemonBase = async () => {
  const response = await baseApi.get('/pokemondata');

  return response;
};

const sendPokemonData = async ({ data }) => {
  const response = await baseApi.post('/pokemondata', data);

  return response;
};

const getAllPokemon = async ({ offset }) => {
  const response = await api.get(`/pokemon?offset=${offset}`);

  return response;
};

const getSinglePokemon = async ({ id }) => {
  const response = await api.get(`/pokemon/${id}`);

  return response;
};

export {
  getAllPokemon,
  getSinglePokemon,
  getAllPokemonBase,
  sendPokemon,
  getSinglePokemonBase,
  sendPokemonData,
};
