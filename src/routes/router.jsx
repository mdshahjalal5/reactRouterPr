import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error";
import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";
import Posts from "../components/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
