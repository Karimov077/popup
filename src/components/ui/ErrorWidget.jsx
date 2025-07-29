import React from "react";
import errorImage from "@/assets/error.svg"

const ErrorWidget = ({text="Something went wrong :("}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={errorImage} alt="" />
      <p className="text-red-500 text-center">{text}</p>
    </div>
  );
};

export default ErrorWidget;
