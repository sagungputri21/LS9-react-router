import React from "react";

const PostCard = ({ title, comment }) => {
  return (
    <div className="w-full mt-5">
      <div className="p-5 px-8 bg-white shadow-lg border text-black rounded-lg">
        <h1 className="text-start text-xl font-bold text-slate-800">
          {title}
        </h1>
        <p className="text-gray-500 text-start text-sm mt-2">{comment}</p>
      </div>
    </div>
  );
};

export default PostCard;
