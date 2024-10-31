import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

export default function Posts() {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {posts.map((post, id) => {
        return <Post key={id} post={post}></Post>;
      })}
    </div>
  );
}
