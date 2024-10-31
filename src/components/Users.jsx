// import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";
export default function Users() {
  const users = useLoaderData();

  return (
    <>
      <div className="md:grid grid-cols-3 ">
        {users.map((user) => {
          return <User key={user.id} user={user}></User>;
        })}
      </div>
    </>
  );
}
