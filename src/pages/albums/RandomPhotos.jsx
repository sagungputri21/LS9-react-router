import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AlbumAPI from '../../api/albumApi';
import CustomButton from "../../components/button/CustomButton";

const RandomPhotos = () => {
    const [photos, setPhotos] = useState([]);
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

    console.log(photos)

    useEffect(() => {
        fetchData()
    }, []);

    return (
      <div>
        <h1 className="flex justify-center text-xl py-7 mt-5 font-semibold text-blue-800">This are some color that she/he have</h1>
          <div className="grid grid-cols-8 gap-5 left-0 -ml-40">
          {photos.map((photo) => (
            <div className="w-full rounded-md shadow-md">
              <div className="p-2 bg-white w-32">
                  <img src={photo.url} className="w-32" />
                    <p className="text-sm text-blue-900">
                      {photo.title.split(" ")[0]}
                    </p>
                  <p className="text-sm text-gray-600">id: {photo.albumId},{photo.id}</p>
              </div>
            </div>
          ))}
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