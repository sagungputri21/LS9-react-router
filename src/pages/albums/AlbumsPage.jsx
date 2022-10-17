import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AlbumAPI from '../../api/albumApi';
import UserAPI from "../../api/userApi";
import AlbumCard from "../../components/cards/AlbumCard";

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
        <div className="py-5">
          <Link to={`${id}`}>
            {albums && albums.map(({ userId, id, title }) => (
              <AlbumCard 
                userId={userId}
                id={id}
                name={title}
                colorCount={"10 colors"}
              />
          ))}
          </Link>
        </div>
      </div>
    )
    
}

export default AlbumsPage;