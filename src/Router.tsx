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


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <TournamentDetailPage />,
//   },
// ]);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <TournamentpagePrize/>  ,
//   },
// ]);


export function Router() {
  return <RouterProvider router={router} />;
}
