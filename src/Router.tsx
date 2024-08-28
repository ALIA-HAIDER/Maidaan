import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TournamentDetailPage } from './pages/TournamentDetailPage';
import {TournamentpagePrize} from './pages/TouranmentpagePrize';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);







export function Router() {
  return <RouterProvider router={router} />;
}
