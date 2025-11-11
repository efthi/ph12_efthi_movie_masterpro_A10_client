import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllMovies from "../Pages/AllMovies";
import MyCollection from "../Pages/MyCollection";
import Wishlist from "../Pages/Wishlist";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MovieDetails from "../Pages/MovieDetails";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
 /**Route ডিফাইন করছি এখানে, Public হলে হবে Component যদি Private হয় তাইলে হবে Element */
    {
        path:'/',
        Component:MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {index: true, element: <Home />,},
            /*Public Routes এখানে */
            {path:'allmovies', element: <AllMovies></AllMovies> },
            {path:'login', element: <Login></Login> },
            {path:'register', element: <Register></Register> },

            /**Private Routes এখানে */
            {path:'allmovies/moviedetails/:id', element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute> },
            {path:'mycollection', element: <PrivateRoute><MyCollection></MyCollection></PrivateRoute> },
            {path:'wishlist', element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute> },
            {path:'userprofile', element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute> },

            {
                path: "*", element: <ErrorPage />
            },
        ]
    }
]);

export default router;