import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },

        {
            path:'/contact',
            element:<h1>Contact</h1>
        },

        {
            path:'/update',
            element:<h1>Update Profile</h1>
        },

        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:()=> fetch("./estate.json")
        },

       
    ]
  },



]);

export default router;
