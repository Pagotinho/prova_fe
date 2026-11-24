import { usePokemon } from '../hooks/usePokemon';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
export function PokemonPage() {
  const { data, isPending, isError, refetch, isFetching } = usePokemon();
  return <main className="mx-auto max-w-[1040px] px-4 pb-24 pt-9 sm:px-0 sm:mx-8 lg:mx-auto lg:px-0">
    <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
      <div><h1 className="text-3xl font-bold tracking-tight sm:text-[34px]">Catálogo de Pokémon</h1><p className="mt-2 max-w-md text-sm leading-snug text-slate-600">Consulte o número e o nome para orientar o cliente na montagem do deck.</p></div>
      <span className="shrink-0 rounded-full border border-amber-400 bg-amber-50 px-3 py-1.5 text-xs font-bold">151 Pokémon · primeira geração</span>
    </div>
    {isPending || (isError && isFetching) ? <Loading/> : isError ? <section role="alert" className="rounded-xl border border-line bg-white p-8 text-center"><h2 className="text-xl font-bold">Não foi possível carregar os Pokémon</h2><p className="mt-2 text-sm text-slate-600">Verifique sua conexão com a internet e tente novamente.</p><button type="button" onClick={()=>void refetch()} className="mt-5 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2">Tentar novamente</button></section> : <section aria-label="Lista de Pokémon" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{data?.results.map(pokemon=><PokemonCard key={pokemon.url} pokemon={pokemon}/>)}</section>}
  </main>;
}
