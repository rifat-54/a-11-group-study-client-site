import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignment from "../pages/Assignment";
import PandingAssignment from "../pages/PandingAssignment";
import ErrorPage from "../components/ErrorPage";
import CreateAssignment from "../pages/CreateAssignment";
import MyAttemptAssignment from "../pages/MyAttemptAssignment";
import PrivateRoutes from "./PrivateRoutes";
import UpdateAssignment from "../pages/UpdateAssignment";
import ViewDetails from "../pages/ViewDetails";
import ApplyAssignment from "../pages/ApplyAssignment";
import GiveMarks from "../pages/GiveMarks";
import Features from "../components/Features";
import Dashboard from "../layout/Dashboard";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/assignment',
                element:<Assignment></Assignment>
            },
            {
                path:'/create-assignment',
                element:<PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path:'/update-assignment/:id',
                element:<PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>
            },
            {
                path:'/view-details/:id',
                element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
            },
            {
                path:'/apply-assignment/:id',
                element:<PrivateRoutes><ApplyAssignment></ApplyAssignment></PrivateRoutes>
            },
            {
                path:'/my-attempt-assignment',
                element:<PrivateRoutes><MyAttemptAssignment></MyAttemptAssignment></PrivateRoutes>
            },
            {
                path:'/pending-assignment',
                element:<PrivateRoutes><PandingAssignment></PandingAssignment></PrivateRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/givemark/:id',
                element:<PrivateRoutes><GiveMarks></GiveMarks></PrivateRoutes>
            }

            
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
])

export default routes;