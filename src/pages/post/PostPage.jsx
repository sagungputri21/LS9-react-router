import React from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import PostAPI from "../../api/postApi";
import PostCard from "../../components/cards/PostsCard";
import axios from "axios";
import client from "../../api/baseApi";
import Comments from "./CommentPage";

const PostPage = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  console.log("TEST ==>", id);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
    //   const data = await PostAPI.getAllPost({id});
    const data = await client.get(`/posts?userId=${id}`);
      setPost(data.data);
      console.log("photos ==>", data);
    } catch (err) {
      console.log("error ===> ", err);
    }
  };

  console.log(post);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="flex -ml-52 px-10 mt-14 my-12">
    <div className="flex border-r-2 border-gray-400 w-1/2">
      <div className="flex flex-col gap-2 left-0 mr-10">
        {post?.slice(0, 4).map((post) => (
        //   <a onClick={() => navigate(`${comment.id}`)}>
        //   <PostCard 
        //     title={post.title}
        //     comment={post.body}
        //   />
        //   </a>
          <PostCard 
            title={post.title}
            comment={post.body}
          />
        ))}
      </div>
    </div>
    <div className="flex flex-col mt-10 ml-10 w-1/2">
    {post?.slice(5, 9).map((post) => (
          <PostCard 
            title={post.title}
            comment={post.body}
          />
        ))}
    </div>
    {/* <Comments /> */}
    </div>
  );
};

export default PostPage;
