import type { Pokemon } from '../types/pokemon';
export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const numero = pokemon.url.split('/').filter(Boolean).pop() ?? '';
  const nome = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <article className="group flex min-w-0 items-center gap-3 rounded-xl border border-line bg-white p-3 transition hover:border-gold hover:shadow-md sm:p-4">
      <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-number group-hover:bg-amber-200">
        <span className="text-[9px] leading-none">Nº</span>
        <span className="text-base font-bold leading-tight">{numero.padStart(3, '0')}</span>
      </div>
      <h2 className="min-w-0 break-words text-xs font-bold sm:text-sm">{nome}</h2>
    </article>
  );
}
