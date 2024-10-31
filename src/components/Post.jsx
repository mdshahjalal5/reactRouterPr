import { Link } from "react-router-dom";
export default function Post({ post }) {
  console.log(post);
  const postStyle = {
    backgroundColor: "purple",
    border: "2px solid green",
    borderRadius: "5px",
    display: "grid",
    // gridTemplateColumns: "repeat(4, 1fr)",
  };
  const { body, id, title, userId } = post;
  return (
    <div style={postStyle} className="p-3 font-semibold">
      <p>post id: {id} </p>
      <p>user id:{userId} </p>
      <p>title:{title} </p>
      <p>body:{body} </p>
      <Link to={`/post/${post.id}`}>
        <button className="bg-lime-50 rounded mt-3 p-2">show details </button>
      </Link>
    </div>
  );
}
