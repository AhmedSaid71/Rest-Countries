import { Link, useRouteError } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import NotFound from "./NotFound";
const ErrorFallback = () => {
  const error = useRouteError();
  return (
    <section className="flex justify-center items-center flex-col dark:bg-dark-blue dark:text-white min-h-[100dvh]">
      {error.status === 404 ? (
        <NotFound>
          <div className="flex flex-col items-center">
            <h1>Something went wrong 🧐</h1>
            <p>{error?.error.message}</p>
            <Link
              to="/"
              className="underline flex items-center gap-1 hover:text-red-400 transition"
            >
              Go Back To Home <HiOutlineArrowNarrowRight />
            </Link>
          </div>
        </NotFound>
      ) : (
        <>
          error.sta<h1>Something went wrong 🧐</h1>
          <p>{error?.error.message}</p>
          <button>Go Back To Home</button>
        </>
      )}
    </section>
  );
};

export default ErrorFallback;
