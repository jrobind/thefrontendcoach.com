import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
    <section className="wrapper">
      <h1 className="u-mt--xlarge u-pl--medium u-pr--medium">Latest Articles</h1>
      <div className="posts u-mt--large u-pl--medium u-pr--medium">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </section>
  );
}