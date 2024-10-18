// src/components/Post.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, fetchPosts } from "../features/postsSlice";
import { useEffect } from "react";

const Post = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addPost({ content, timestamp: new Date() }));
      setContent(""); // Clear input field after submission
    }
  };

  return (
    <div>
      <h2>Facebook Posts</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>

      {loading && <p>Loading posts...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <small>{new Date(post.timestamp.seconds * 1000).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
