import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AlbumAPI from '../../api/albumApi';

const RandomPhotos = () => {
    const [photos, setPhotos] = useState([20]);
    const { id } = useParams();
    console.log('TEST ==>', id )
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const data = await AlbumAPI.getAllPhotos();
            setPhotos(data);
            console.log('photos ==>', data);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
      <div>
        <h1>This are some color that she/he have</h1>
          <div className="flex flex-wrap mx-10 gap-3">
            <div className="p-2 bg-white rounded-md">
            {photos.map(({ photo }) => (
              <><img src={photo.url} className="w-32">
                <p className="text-sm text-white">
                  {photo.title.split(" ")[0]}
                </p>
                </img>
                <p className="text-sm text-gray-600">id: {photo.albumId},{photo.id}</p>
              </>
            ))}
            </div>
          </div>
          <CustomButton 
              onclick={() => navigate(`/user/albums/${id}`)}
              children="See More"
              extraClass="bg-blue-400 text-white my-5 w-64 mx-3 mb-2 hover:bg-blue-600"
            />
      </div>
    )
    
}

export default RandomPhotos;