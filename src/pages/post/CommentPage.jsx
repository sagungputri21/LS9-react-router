import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Comments = () => {
    let params = useParams();
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        try {
        //   const data = await PostAPI.getAllPost({id});
        const data = await client.get(`/comments?postId=${params.id}`);
        setComments(data.data);
          console.log("photos ==>", data);
        } catch (err) {
          console.log("error ===> ", err);
        }
      };
    
      console.log(comments);
    
      useEffect(() => {
        fetchData();
      }, [params.id]);

      let comment = comments.find(
        comment => comment.id === Number(params.id)
      )

    return (
        <div>
          {comment.map((comment) => (
            <p>{comment.name}</p>
          ))}
          
        </div>

    )
}

export default Comments;