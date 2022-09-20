import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserAPI from "../../api/userApi";
import LinkButton from "../../components/button/LinkButton";
import CustomButton from "../../components/button/CustomButton";

const UserDetail = () => {
    const { id } = useParams();
    // console.log('data', userId, albumId, id)
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

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
    
    // console.log(user)

    return (
        <div className="flex items-start md:px-0 px-2">
          <div className="flex flex-col items-start text-start">
            <h1 className="md:text-5xl text-4xl font-semibold mb-8">{user.name} Profile</h1>
            <h3 className="font-bold text-lg flex items-start underline underline-offset-4">Details Data :</h3>
            <div className="mt-3 flex flex-col gap-1 md:text-lg text-md">
              <p>Name     : {user.name}</p>
              <p>Username :{user.username}</p>
              <p>Email    : {user.email}</p>
              <p></p>
            </div>
            <LinkButton
              path={'/user'} 
              children="Go Back"
              extraClass="bg-gray-200 font-bold mt-12"
            />
            <CustomButton 
              onclick={() => navigate(`${id}`)}
              children="See More"
              extraClass="bg-blue-400 text-white my-5 w-64 mx-3 mb-2 hover:bg-blue-600"
            />
          </div>

          
        </div>
    )
}

export default UserDetail;