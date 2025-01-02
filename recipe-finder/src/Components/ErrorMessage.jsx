import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const ErrorMessage = ({ message }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center space-x-3"
      role="alert"
    >
      <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
      <div>
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
