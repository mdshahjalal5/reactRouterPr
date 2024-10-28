import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
      },
    ],
  },
]);
