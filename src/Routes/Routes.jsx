import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registion from "../Pages/Registration";
import UpdateProfile from "../Pages/UpdateProfile";
import CardDetails from "../Pages/CardDetails";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import BookMark from "../Pages/BookMark";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registion></Registion>,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivetRoute>
            <UpdateProfile></UpdateProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <CardDetails></CardDetails>,
          </PrivetRoute>
        ),
      },
      {
        path: "/bookmark/details/:id",
        element: (
          <PrivetRoute>
            <CardDetails></CardDetails>,
          </PrivetRoute>
        ),
      },
      {
        path: "/bookmark",
        element: (
          <PrivetRoute>
            <BookMark></BookMark>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
