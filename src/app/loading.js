"use client";

import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16 ">
      <MoonLoader className="h-52" color="#f1f2f3" aria-label="Loading Spinner" />
    </div>
  );
};

export default Loading;
