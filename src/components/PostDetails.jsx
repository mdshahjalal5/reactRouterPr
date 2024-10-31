import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const data = useLoaderData();
  const { body, id, title, userId } = data;
  console.log(data, "datachk");
  return (
    <div className="bg-sky-200 md:w-2/4 mx-auto m-3 mx-5 rounded p-3 ">
      <p className="text-center ">ID:{id}</p>
      <p className="text-lime-700 text-center font-extrabold p-3">{title}</p>
      <p className="p-3">{body}</p>
    </div>
  );
};

export default PostDetails;
