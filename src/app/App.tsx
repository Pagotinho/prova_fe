import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from '../shared/Header';
import { PokemonPage } from '../features/pokemon/pages/PokemonPage';
const queryClient = new QueryClient();
export function App() {
  return <QueryClientProvider client={queryClient}><div className="min-h-screen bg-page font-sans text-ink"><Header/><PokemonPage/></div></QueryClientProvider>;
}
