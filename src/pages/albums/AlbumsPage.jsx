import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AlbumAPI from '../../api/albumApi';
import UserAPI from "../../api/userApi";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const [user, setUser] = useState([]);
    const { id } = useParams();
    console.log('TEST ==>', id )

    const fetchData = async () => {
        try {
            const data = await AlbumAPI.getAlbums(id);
            setAlbums(data);
            const person = await UserAPI.getUserById(id);
            setUser(person);
            console.log('album data', data);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id]);

    return (
      <div>
        <h1>This are some albums of {user.name}</h1>
          {albums && albums.map(({ userId, id, title }) => (
            <>
            <h1>{userId}</h1>
            <h1>{id}</h1>
            <h1>{title}</h1></>
          ))}
      </div>
    )
    
}

export default AlbumsPage;