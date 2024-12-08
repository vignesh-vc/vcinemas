import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Slider from "../component/Carousel/Slider";
import MovieLanding from "../component/MovieLanding";
import SeatSelect from "../Pages/SeatSelect";
import Payment from "../Pages/Payment";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Slider />,
      },
      {
        path: "/",
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/movieDetails",
        element: <MovieLanding />,
      },
      {
        path: "/seatBooking",
        element: <SeatSelect />,
      },
      {
        path: "/ticket",
        element: <Payment />,
      },
    ],
  },
]);
