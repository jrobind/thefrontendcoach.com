import { NextSeo } from 'next-seo';
import BlogPost from '../../components/BlogPost';
import { getAllBlogPosts } from '../../lib/api';
import { rootURL } from '../../lib/constants';


const BlogHome = ({ posts }) => (
  <div 
    className="blog bg-blog-home-blob bg-no-repeat"
    style={{
      backgroundPosition: 'right -280px',
      backgroundSize: '700px',
    }}
  >
    <NextSeo
      title="The Front End Coach | Latest articles"
      description="Keep up-to-date with front-end development tips, tricks, advice, and learning resources for those looking to break into the industry."
      canonical={`${rootURL}blog`}
    />
    <section 
      className="py-6 pb-8 md:px-3 bg-blog-home-blob-2 bg-no-repeat" style={{
        backgroundPosition: 'bottom left',
        backgroundSize: '600px',
        minHeight: 'calc(100vh - 85px)'
      }}>
      <div className="wrapper px-3 md:px-0" style={{minHeight: '700px'}}>
        <h1 className="text-3xl md:text-4xl mb-4">Latest Articles</h1>
        <div className="flex justify-between grid gap-3 grid-cols-landing-blog-sm md:grid-cols-landing-blog-lg">
          <BlogPost posts={posts} limit={0}/>
        </div>
      </div>
    </section>
  </div>
);

export const getStaticProps = async () => {
  return {
    props: {
      posts: getAllBlogPosts(),
    }
  };
};

export default BlogHome;