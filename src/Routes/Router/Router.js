import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReview from "../../Pages/Reviews/MyReview/MyReview";
import UpdateReview from "../../Pages/Reviews/UpdateReview/UpdateReview";
import AddService from "../../Pages/Services/AddService/AddService";
import AllServices from "../../Pages/Services/AllServices/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                // loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <h2>Reviews</h2>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/myReview',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
            },
            {
                path: '/myReview/:id',
                element: <PrivateRouter><UpdateReview></UpdateReview></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/myReview/${params.id}`)
            },
            {
                path: '/addServices',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },

        ]
    },
    {
        path: '*',
        element: <h1>Not Found</h1>
      }
])