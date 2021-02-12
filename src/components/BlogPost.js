import Link from "next/link";


const BlogPost = ({ posts, limit }) => {;
  const postsToRender = limit ? posts.slice(0, limit) : posts;

  return (
    <>
      {postsToRender.map(({slug, data}) => {
        return (
          <Link key={slug} href={"/blog/" + slug}>
            <a className="blog-card" style={{height: '180px', color: 'black'}}>
              <div className="flex justify-between">
                <span className="text-xs font-bold">{data.date}</span>
                <div>
                  {data.tags.map((tag, i) => {
                    return <span key={i} className="pill text-xs mr-1">{tag}</span>
                  })}
                </div>
              </div>
              <h2 className="text-base text-md:text-lg font-bold" style={{maxWidth: '300px'}}>{data.cardTitle}</h2>
              <span className="flex items-center font-bold">Read more <img alt="" src='/images/arrow-right.svg'/></span>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default BlogPost;