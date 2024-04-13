import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Root from "../layout/Root";
import Contact from "../pages/contact/Contact";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import SignUp from "../pages/signUp/SignUp";
import Update from "../pages/updateProfile/Update";
import UserProfile from "../pages/userProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/update",
        element: <PrivateRoute><Update></Update></PrivateRoute> 
      },

      {
        path: "/userprofile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("./estate.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
