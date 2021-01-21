import Link from "next/link";

const BlogPost = ({ posts, limit }) => {
  const orderedPosts = posts.sort((a, b) => b.data.timestamp - a.data.timestamp);
  const postsToRender = limit ? orderedPosts.slice(0, limit) : orderedPosts;

  return (
    <>
      {postsToRender.map(({slug, data}) => {
        return (
          <Link key={slug} href={"/blog/" + slug}>
            <a className="blog-card text-black" style={{height: '180px'}}>
              <div className="flex justify-between">
                <span className="text-xs">{data.date}</span>
                <div>
                  {data.tags.map((tag, i) => {
                    return <span key={i} className="pill text-xs mr-1">{tag}</span>
                  })}
                </div>
              </div>
              <h3 className="text-lg font-bold" style={{maxWidth: '300px'}}>{data.cardTitle}</h3>
              <span className="flex items-center">Read more <img alt="" src='./images/arrow-right.svg'/></span>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default BlogPost;