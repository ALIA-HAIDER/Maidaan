import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TournamentDetailPage } from './pages/TournamentDetailPage';
import {TournamentpagePrize} from './pages/TouranmentpagePrize';
import TournamentPage from './pages/TournamentPage'
import SignUpPage from './pages/SignUpPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/SignUp',
    element: <SignUpPage/>,
  },
  {
    path: '/Tournament',
    element: <TournamentPage />,
  },
  {
    path: '/Tournament/Details',
    element: <TournamentDetailPage />,
  },

  {
    path: '/Tournament/Prizes',
    element: <TournamentpagePrize/>  ,
  }
]);


export function Router() {
  return <RouterProvider router={router} />;
}
