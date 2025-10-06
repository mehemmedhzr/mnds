import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> }
        ]
    }
])