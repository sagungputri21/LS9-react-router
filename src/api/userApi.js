import client from "./baseApi";

const UserAPI = {
    getAllUser: async () => {
      try {
        const res = await client.get(`/users`);
        return res.data;
      }catch (err) {
        console.log(err);
        console.log(err.response)
        console.log(res);
      }
    },

    getUserById: async (id) => {
      try {
        const user = await client.get(`/users/${id}`);
        return user.data;
      }catch (err) {
        console.log(err);
        console.log(err.response)
        console.log(user);
      }
    },

}

export default UserAPI;