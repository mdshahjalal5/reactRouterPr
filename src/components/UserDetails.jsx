import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  console.log(userDetails);
  const { userId, id, title, completed } = userDetails;
  return (
    <div className="bg-lime-200  w-1/2 mx-auto rounded shadow-rose-200 p-3 m-4 ">
      <p>{userId}</p>
      <p>{id}</p>
      <p>{title}</p>
      <p>{completed}</p>
      again checking mere dost
    </div>
  );
};

export default UserDetails;
