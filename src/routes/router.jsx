import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);
