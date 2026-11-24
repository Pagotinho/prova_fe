import { useQuery } from '@tanstack/react-query';
import { listarPokemon } from '../api/pokemon';
export function usePokemon() {
  return useQuery({
    queryKey: ['pokemon', 'primeira-geracao'],
    queryFn: listarPokemon,
    staleTime: 1000 * 60 * 10,
    retry: false,
    networkMode: 'always',
    refetchOnWindowFocus: false,
  });
}
