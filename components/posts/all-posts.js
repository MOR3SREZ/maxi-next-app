import PostsGrid from '../posts/post-grid';

import styles from './all-posts.module.css';

const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
export default AllPosts;
