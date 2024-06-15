import React from "react";

interface skeletonProps {
  length: number
}

const PostSkeleton: React.FC<skeletonProps> = ({length}) => {
  const dataFrom = Array.from({ length: length });
  return (
    <div className="py-6 grid xl:grid-cols-5 gap-4 lg: grid-cols-2 items-center mx-auto mt-6 ">
      {dataFrom.map((_, idx) => (
        <div key={idx} className="flex flex-col gap-4 w-52 py-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
