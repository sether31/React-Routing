import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const errorMessage = error?.statusText || error?.message || "Page not found";

  return (
    <div className="flex flex-col items-center justify-center text-center h-svh container-xl">
      <h1 className="text-3xl">
        Oops!
        404 {errorMessage}
      </h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <br/>
      <NavLink className="underline" to="/">Go back</NavLink>
    </div>
  );
}

export default ErrorPage;