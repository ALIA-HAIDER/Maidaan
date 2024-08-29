import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TournamentDetailPage } from './pages/TournamentDetailPage';
import TournamentPage from './pages/TournamentPage'
import SignUpPage from './pages/SignUpPage';
import GovtSchemes from './pages/GovtSchemes';
import HostingPage from './pages/HostingPage';

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
    path: '/GvtSch',
    element: <GovtSchemes/>,
  },
  {
    path: '/HostingPage',
    element: <HostingPage/>,
  }


]);


export function Router() {
  return <RouterProvider router={router} />;
}