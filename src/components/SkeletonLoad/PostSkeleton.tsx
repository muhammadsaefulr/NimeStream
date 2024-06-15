import React from "react";

interface skeletonProps {
  length: number;
}

const PostSkeleton: React.FC<skeletonProps> = ({ length }) => {
  const dataFrom = Array.from({ length: length });
  return (
    <div className="py-6 grid xl:grid-cols-5 gap-4 lg: grid-cols-2 mt-6 ">
    {dataFrom.map((_, idx) => (
        <div key={idx} className="flex flex-col py-4 xl:w-52 xl:gap-4 lg: w-auto lg: gap-2 ">
          <div className="skeleton h-32 w-auto"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
