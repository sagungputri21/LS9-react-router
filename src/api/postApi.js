import client from "./baseApi";

const PostAPI = {
    getAllPost: async (id) => {
      try {
        const res = await client.get(`/posts?userId=${id}`);
        return res.data;
      }catch (err) {
        console.log(err);
        console.log(err.response)
        console.log(res);
      }
    },

    getComments: async (id) => {
      try {
        const photos = await client.get(`/comments?postId=${id}`);
        return photos.data;
      }catch (err) {
        console.log(err);
        console.log(err.response)
        console.log(photos);
      }
    },
}

export default PostAPI;