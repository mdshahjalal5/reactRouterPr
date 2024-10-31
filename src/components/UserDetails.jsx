import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const userDetails = useLoaderData();
  console.log(userDetails);
  const { userId, id, title, completed } = userDetails;
  return (
    <div className="bg-lime-200  md:w-1/2 mx-3 rounded shadow-rose-200 p-3 m-4 ">
      <p>{userId}</p>
      <p>{id}</p>
      <p>{title}</p>
      <p>{completed}</p>
      <div className="text-center">
        <button
          className="bg-red-50 p-2 px-4 mt-3 rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
