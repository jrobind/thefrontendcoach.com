import Link from "next/link";
import fs from "fs";

const BlogHome = ({ slugs }) => (
  <main className="blog">
    <section className="py-4 md:px-3">
      <div className="wrapper u-px-3">
      <h1 className="text-3xl md:text-4xl mb-4">Latest Articles</h1>
        {slugs.map(slug => {
          return (
            <div key={slug}>
              <Link href={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  </main>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default BlogHome;