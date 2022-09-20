import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumAPI from "../api/albumApi";
import UserAPI from "../api/userApi";

const Test = () => {
    const { userId, id } = useParams();
    const { albumId } = useParams();
    console.log('data', userId, albumId, id)
    const [albums, setAlbums] = useState([]);
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

    const fetchData = async () => {
        try {
            const data = await AlbumAPI.getAlbums(userId);
            setAlbums(data);
            console.log('album data', data);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
          userData()
          fetchData()
    }, [userId, id]);
    // console.log(albums)
    // console.log(user)
    return (
        <div>
          <h1>this is profile page of {user.name}</h1>
          {albums && albums.map(({ userId, id, title }) => (
            <>
            <h1>{userId}</h1>
            <h1>{id}</h1>
            <h1>{title}</h1></>
          ))}
        </div>
    )
}

export default Test;