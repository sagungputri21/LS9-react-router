import React from "react";
import CustomButton from "../button/CustomButton";
import { useNavigate } from "react-router-dom";

const AlbumCard = ({ userId, id, name, colorCount }) => {

    return (
      <div className="w-full mt-5">
        <div className="p-5 px-8 bg-white shadow-lg border text-black rounded-lg">
            <h1 className="text-start text-3xl font-bold text-slate-800 mt-2">{name}</h1>
            <div className="flex gap-5 mt-5">
            <div className="flex">
              <h1 className="text-lg border rounded-l-lg border-blue-800 w-fit px-2 bg-slate-300">{userId}</h1>
              <h1 className="text-lg border rounded-r-lg border-blue-800 w-fit px-2">{id}</h1>
            </div>
            <h1 className="text-xl text-gray-500 italic">{colorCount}</h1>
            </div>
        </div>
      </div>
    )

}

export default AlbumCard;

