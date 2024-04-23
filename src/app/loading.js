"use client";

import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  return (
    <div className="flex justify-center mt-10 ">
      <MoonLoader className="h-52" color='#f89c0c' aria-label="Loading Spinner" />
    </div>
  );
};

export default Loading;
