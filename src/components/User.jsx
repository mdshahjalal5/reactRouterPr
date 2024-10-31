import { Link } from "react-router-dom";

export default function User({ user }) {
  const { userId, id, title, completed } = user;
  return (
    <div className="bg-pink-100 m-6  p-3 rounded-lg">
      <p>{userId}</p>
      <p>{id}</p>
      <p>{title}</p>
      <p>{completed}</p>
      <button className="bg-amber-50 px-4 py-1 mt-2 rounded ">
        <Link to={`/todos/${user.id}`}>Details</Link>
      </button>
    </div>
  );
}
