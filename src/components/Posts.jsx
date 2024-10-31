import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

export default function Posts() {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className="md:grid grid-cols-4 gap-4 m-3 my-6">
      {posts.map((post, id) => {
        return <Post key={id} post={post}></Post>;
      })}
    </div>
  );
}
