import { Link, useRouteError } from "react-router-dom";

export default function CareerError() {
  const error = useRouteError();
  const errorMessage = error?.statusText || error?.message || "Page not found";

  return (
    <div className="flex flex-col items-center justify-center text-center h-svh container-xl">
      <h1 className="text-3xl">
        Oops! {errorMessage}
      </h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <br/>
      <Link className="underline" to="/">Back to the Home Page</Link>
    </div>
  );
}
