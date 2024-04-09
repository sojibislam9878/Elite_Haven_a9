import { createBrowserRouter} from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registion from "../Pages/Registration";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/registration",
            element:<Registion></Registion>
        },
      ]
    },
  ]);