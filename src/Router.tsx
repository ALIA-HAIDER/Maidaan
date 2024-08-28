import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TournamentDetailPage } from './pages/TournamentDetailPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <TournamentDetailPage />,
  },
]);
export function Router() {
  return <RouterProvider router={router} />;
}
