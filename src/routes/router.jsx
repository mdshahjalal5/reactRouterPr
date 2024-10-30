import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error";
import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";
import Posts from "../components/Posts";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Hellow I am home page mre </div>,
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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
