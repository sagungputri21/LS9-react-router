import client from "./baseApi";

const AlbumAPI = {
    getAlbums: async (id) => {
      try {
        const res = await client.get(`/albums?userId=${id}`);
        return res.data;
      }catch (err) {
        console.log(err);
        console.log(err.response)
        console.log(res);
      }
    },

    getAllPhotos: async () => {
      try {
        const photos = await AlbumAPI.getAlbums('/photos');
        return photos.data;
      }catch (err) {
        console.log(err);
        console.log(err.response)
        console.log(photos);
      }
    },

    getPhotosByID: async (id) => {
     try {
       const photos = await AlbumAPI.getAlbums(`/photos?albumId=${id}`);
       return photos.data;
     }catch (err) {
       console.log(err);
       console.log(err.response)
       console.log(photos);
     }
    }
}

export default AlbumAPI;