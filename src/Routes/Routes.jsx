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
import GuestRoute from "./GuestRoute";
import EditMovie from "../Components/EditMovie";
import AddMovie from "../Components/AddMovie";
import NotFound from "../Components/NotFound";


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
            
            //Only Guest, যাতে User লগিন অবস্থায় এক্সেস না পায়
            {path:'login', element: <GuestRoute><Login></Login></GuestRoute> },
            {path:'register', element: <GuestRoute><Register></Register> </GuestRoute>},

            /**Private Routes এখানে */
            {path:'allmovies/moviedetails/:id', element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute> },
            {path:'mycollection/moviedetails/:id', element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute> },
            {path:'addmovie', element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>},
            {path:'editmovie/:id', element: <PrivateRoute><EditMovie></EditMovie></PrivateRoute>},
            {path:'mycollection', element: <PrivateRoute><MyCollection></MyCollection></PrivateRoute> },
            {path:'wishlist', element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute> },
            {path:'userprofile', element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute> },

            {
                path: "*", element: <NotFound></NotFound>
            },
        ]
    }
]);

export default router;