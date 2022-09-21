import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserAPI from "../../api/userApi";
import LinkButton from "../../components/button/LinkButton";
import CustomButton from "../../components/button/CustomButton";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const userData = async () => {
        try {
            const person = await UserAPI.getUserById(id);
            setUser(person);
            console.log(person);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
          userData()
    }, [id]);
    
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className="flex flex-col items-start md:px-0 px-2">
          <div className="flex flex-col items-start text-start">
            <h1 className="md:text-5xl text-4xl font-semibold mb-8">{user.name} Profile</h1>
            <h3 className="font-bold text-lg flex items-start underline underline-offset-4">Complete Profile :</h3>
            <hr className="border border-blue-300 w-screen max-w-screen-xl mt-2"/>
              <div className="mt-3 flex flex-col gap-1 md:text-lg text-md p-5 w-full">
                <p>Name     : {user.name}</p>
                <p>Username :{user.username}</p>
                <p>Email    : {user.email}</p>
                <p></p>
              </div>
             <hr className="border border-blue-300 w-full mt-2"/>
            <LinkButton
              path={'/user'} 
              children="Go Back"
              extraClass="bg-gray-200 font-bold mt-5"
            />
          </div>
          <ul className="flex border-b mt-16">
            <div className="flex  gap-20 -mb-px mr-1 bg-white py-2 px-4 w-screen max-w-screen-xl">
                <Link to="user-photos" onClick={handleClick} className={`text-md hover:text-blue-500 ${isActive ? 'text-blue-600 font-semibold underline underline-offset-4 decoration-blue-600' : 'text-gray-400'}`}>
                  Photos
                </Link>
                <Link to="user-posts" onClick={handleClick} className={`text-md hover:text-blue-500 ${!isActive ? 'text-blue-600 font-semibold underline underline-offset-4 decoration-blue-600' : 'text-gray-400'}`}>
                  Posts
                </Link>
                <Link to="todos" onClick={handleClick} className={`text-md hover:text-blue-500 ${!isActive ? 'text-blue-600 font-semibold underline underline-offset-4 decoration-blue-600' : 'text-gray-400'}`}>
                  Todos
                </Link>
            </div>
          </ul>
        </div>
    )
}

export default UserDetail;