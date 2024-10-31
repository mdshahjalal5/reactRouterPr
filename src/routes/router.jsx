import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/Error";
import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";
import Posts from "../components/Posts";
import Contact from "../components/Contact";
import Post from "../components/Post";
import PostDetails from "../components/PostDetails";
import UserDetails from "../components/UserDetails";

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
        loader: () => {
          return fetch("https://jsonplaceholder.typicode.com/posts");
        },
        element: <Posts />,
      },

      // loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      {
        path: "/users",
        loader: () => {
          const users = fetch("https://jsonplaceholder.typicode.com/todos");
          console.log(users);
          return users;
        },
        element: <Users />,
      },
      {
        path: "/todos/:chkId",
        loader: ({ params }) => {
          console.log(params.chkId);
          return fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.chkId}`,
          );
        },
        element: <UserDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/post/:id",
        loader: ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`,
          );
        },
        element: <PostDetails />,
      },
    ],
  },
]);
