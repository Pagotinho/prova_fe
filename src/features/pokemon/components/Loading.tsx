export function Loading() {
  return <div role="status"><p className="mb-4 text-sm text-slate-600">Carregando Pokémon...</p><div aria-hidden="true" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{Array.from({length:15},(_,i)=><div key={i} className="flex animate-pulse items-center gap-3 rounded-xl border border-line bg-white p-3 sm:p-4"><div className="h-12 w-12 shrink-0 rounded-xl bg-number"/><div className="h-3 w-20 rounded bg-number"/></div>)}</div></div>;
}
