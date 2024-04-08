import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },

        {
            path:'/about',
            element:<h1>About</h1>
        },

        {
            path:'/update',
            element:<h1>Update Profile</h1>
        },
    ]
  },



]);

export default router;
