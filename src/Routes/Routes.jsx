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


const router = createBrowserRouter([
 /**Route ডিফাইন করছি এখানে, Public হলে হবে Component যদি Private হয় তাইলে হবে Element */
    {
        path:'/',
        Component:MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {index: true, element: <Home />,},
            {path:'allmovies', element: <AllMovies></AllMovies> },
            {path:'allmovies/moviedetails/:id', element: <MovieDetails></MovieDetails> },
            {path:'mycollection', element: <MyCollection></MyCollection> },
            {path:'wishlist', element: <Wishlist></Wishlist> },
            {path:'login', element: <Login></Login> },
            {path:'register', element: <Register></Register> },

            {
                path: "/*", element: <ErrorPage />
            },
        ]
    }
]);

export default router;