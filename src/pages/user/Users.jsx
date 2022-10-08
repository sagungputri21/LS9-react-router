import React, { useState, useEffect } from "react";
import UserAPI from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import UserCard from "../../components/cards/UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);

    const usersData = async () => {
        try {
            const people = await UserAPI.getAllUser();
            setUsers(people);
            console.log(people);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
        usersData()
    }, []);

    return (
      <div>
        <h1 className="text-4xl mb-12">Hallo! <br/> This is 10 user's data from JSONPlaceholder</h1>
        <div className="flex flex-wrap gap-8 justify-center">
            {users.map((user) => (
                <UserCard  
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    origin={user.address.city}
                />
            ))}
        </div>
      </div>
    )
}

export default Users;