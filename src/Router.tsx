import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TournamentDetailPage } from './pages/TournamentDetailPage';
import {TournamentpagePrize} from './pages/TouranmentpagePrize';
// import {TournamentsIndividualSchedule} from './pages/TournamentsIndividualSchedule';
import TournamentsIndividualSchedule from "./pages/TournamentsIndividualSchedule"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
// ]);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <TournamentDetailPage />,
//   },
// ]);


const router = createBrowserRouter([
  {
    path: '/',
    element: <TournamentpagePrize/>  ,
  },
]);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <TournamentsIndividualSchedule/>,
//   },
// ]);


export function Router() {
  return <RouterProvider router={router} />;
}
