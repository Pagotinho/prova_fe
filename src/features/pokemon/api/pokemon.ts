import type { PokemonResponse } from '../types/pokemon';
export async function listarPokemon(): Promise<PokemonResponse> {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  if (!resposta.ok) throw new Error('Não foi possível carregar os Pokémon.');
  return resposta.json();
}
