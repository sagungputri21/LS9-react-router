import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AlbumAPI from '../../api/albumApi';
import UserAPI from "../../api/userApi";

const UserPhotoPage = () => {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    console.log('TEST ==>', id )

    const fetchData = async () => {
        try {
            const data = await AlbumAPI.getPhotosByID(id);
            setPhotos(data);
            console.log('photos in album', data);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id]);

    return (
      <div>
        <h1>This are some color photo :v of the album</h1>
          <div className="flex flex-wrap mx-10 gap-3">
            {photos.map(({ photo }) => (
              <><p className="text-sm text-gray-600">id: {photo.albumId},{photo.id}</p>
              <img src={photo.url} className="w-32">
                <p className="text-sm text-white">
                  {photo.title.split(" ")[0]}
                </p>
              </img>
             </>
            ))}
          </div>
      </div>
    )
    
}

export default UserPhotoPage;