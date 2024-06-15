import React from "react";

export const EpisodeListSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-80 w-full"></div>
        <div className="skeleton h-4 w-36"></div>
        <div className="flex gap-x-2">
          <div className="skeleton h-10 w-20"></div>
          <div className="skeleton h-10 w-20"></div>
          <div className="skeleton h-10 w-20"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-8">
        <div className="skeleton h-4 w-36"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-1/3"></div>
      </div>
    </div>
  );
};
