import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";

const navbar = [
    {
      text: "Home",
      link: "/"
    },
    {
      text: "Users",
      link: "/user"
    }
]
const Navbar = () => {
    return (
    <div className="bg-white w-screen mb-10 p-5 top-0">
      <nav className="flex justify-between mx-auto max-w-screen-xl">
        <div className="text-gray-500 flex gap-5 items-center">
          <Link to="/">
              <p className="text-gray-500 hover:text-blue-500 hover:scale-105 active:text-indigo-700">
                Home
              </p>
          </Link>
          <Link to="/user">
              <p className="text-gray-500 hover:text-blue-500 hover:scale-105 active:text-indigo-700">
                Users
              </p>
          </Link>
        </div>
        <CustomButton 
          onclick={onclick} 
          children="Login"
          extraClass="py-3 px-6 bg-blue-500 text-white"
        />
      </nav>
      </div>
    )
}

export default Navbar;