import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

const Posts = () => {
  const [posts, setPosts] = useState(false);

  function getPosts() {
    fetch('https://codebuddy.review/posts')
      .then(response => response.json())
      .then(data => setPosts(data.data.posts.map(item => item)))
      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-wrap">
      {posts &&
        posts.map(item => (
          <PostCard
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            writeup={item.writeup}
            image={item.image}
            avatar={item.avatar}
          />
        ))}
    </div>
  );
};

export default Posts;
