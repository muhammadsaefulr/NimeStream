import React from "react";

const LoadingBars = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 justify-center">
        <span className="loading loading-bars w-1/2 mx-3"></span>
        <p className="text-md font-semibold text-white">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingBars;
