import React from "react";
import CustomButton from "../button/CustomButton";
import { useNavigate } from "react-router-dom";

const UserCard = ({ id, name, username, origin }) => {
    const navigate = useNavigate();

    return (
      <div className="w-[350px]">
        <div className="p-5 bg-white shadow-lg border text-black rounded-lg">
            <h1 className="text-2xl border rounded-full border-blue-800 w-fit px-2">{id}</h1>
            <h1 className="text-2xl font-bold text-slate-800 mt-2">{name}</h1>
            <h1 className="text-xl text-gray-500 italic">({username})</h1>
            <h1 className="text-lg mt-3"><strong>from :</strong> {origin}</h1>
            <CustomButton 
              onclick={() => navigate(`${id}`)}
              children="See More"
              extraClass="bg-blue-400 text-white my-5 w-64 mx-3 mb-2 hover:bg-blue-600"
            />
        </div>
      </div>
    )

}

export default UserCard;

