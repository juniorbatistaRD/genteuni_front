import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FlexColumn from "../../components/common/FlexColumn";
import { getPostById } from "../../data/queryPosts";
import RenderHTML from "../../components/RenderHTML";

function OpenPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(post);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      const postData = await getPostById(id);
      setPost(postData);
      setIsLoading(false);
    };
    getPost();
  }, [id]);

  return (
    <FlexColumn margin="10px">
      {!isLoading && <RenderHTML json={post.attributes} />}
    </FlexColumn>
  );
}

export default OpenPostPage;
