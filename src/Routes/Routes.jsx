import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import EditorPage from "../pages/EditorPage/EditorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,


    },
    {
        path: "/editor/:roomId",
        element: <EditorPage></EditorPage>,
        
    },

]);