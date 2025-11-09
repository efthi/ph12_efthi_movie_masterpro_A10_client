import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
 /**Route ডিফাইন করছি এখানে, Public হলে হবে Component যদি Private হয় তাইলে হবে Element */
    {
        path:'/',
        Component:MainLayout,
        children:[
            {index: true, element: <Home />,},
            {path:'allmovies', element: <p className="text-center m-10">All Movies Page</p> },
            {path:'mycollection', element: <p className="text-center m-10">My Collecetion Page</p> },
            {path:'wishlist', element: <p className="text-center m-10">My Wishlist Page</p> },
            {path:'login', element: <p className="text-center m-10">Login Page</p> },
        ]

    }
]);

export default router;