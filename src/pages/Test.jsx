import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumAPI from "../api/albumApi";

const Test = () => {
    const { userId, albumId } = useParams();
    const [albums, setAlbums] = useState();

    const fetchData = async () => {
        try {
            const data = await AlbumAPI.getAlbums(userId);
            setAlbums(data);
            console.log(data);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [userId]);
    console.log(albums)
    return (
        <div>
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