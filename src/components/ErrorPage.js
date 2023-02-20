import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorMsg = useRouteError();
  const { status, statusText } = errorMsg;

  return (
    <div className="m-5">
      <h1 className="text-red-600">Something went wrong, Please try again!!!!</h1>
      <h1 className="text-red-600 font-bold">
        {status}, {statusText}
      </h1>
    </div>
  );
};

export default ErrorPage;
