import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";


const BlogHome = ({ posts }) => (
  <main className="blog bg-blog-blob-landing">
    <section className="py-6 pb-8 md:px-3">
      <div className="wrapper px-3">
        <h1 className="text-3xl md:text-4xl mb-4">Latest Articles</h1>
        <div className="flex justify-between grid gap-3 grid-cols-landing-blog-sm md:grid-cols-landing-blog-lg">
          {posts.map(({slug, data}) => {
            return (
              <div key={slug} className="cursor-pointer hover:bg-almost-white flex flex-col bg-white justify-between p-2 shadow-md rounded relative z-10" style={{height: '180px'}}>
                <div className="flex justify-between">
                  <span>October 2020</span>
                  <div>
                    {data.tags.map((tag, i) => {
                      return <span key={i} className="pill text-xs mr-1">{tag}</span>
                    })}
                  </div>
                </div>
                <h3 className="text-lg font-bold" style={{maxWidth: '300px'}}>{data.description}</h3>
                <Link href={"/blog/" + slug}>
                  <a className="flex items-center">Read more <img alt="" src='./images/arrow-right.svg'/></a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </main>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    return {data: parsedMarkdown.data, slug}
  })

  return {
    props: {
      posts,
    }
  };
};

export default BlogHome;