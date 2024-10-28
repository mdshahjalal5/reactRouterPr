import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.log(error);
  return (
    <div id="error-page" className="h-screen flex items-center justify-center">
      <div className="text-center p-8 border rounded-lg shadow-lg bg-white space-y-3">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
      </div>
    </div>
  );
}
