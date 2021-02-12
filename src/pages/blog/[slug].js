import React from 'react';
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import dynamic from 'next/dynamic'
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import { getSuggestedBlogPosts } from '../../lib/api';
import Loader from 'react-loader-spinner';
import BlogPost from '../../components/BlogPost';
import { useAppContext } from '../../lib/context';

const DynamicRenderer = dynamic(
  () => import('../../components/BlogPostRenderer'),
  { 
    loading: () => {
      return (
        <div className="flex items-center flex-col">
          <Loader type="ThreeDots" color="#2B8275" height={100} width={100} />
          <div style={{flexGrow: '1'}}></div>
        </div>
      )
    }
  }
 );
const postsDirectory = join(process.cwd(), "/posts");


const Post = ({ posts, frontmatter, markdownBody, slug }) => {
  const { articleLoaded, setLoading } = useAppContext();

  return (
    <>
      <div className="blog-post wrapper mt-6 mb-7 md:mb-8 md:mt-7">
        <NextSeo
          title={frontmatter.title}
          description={frontmatter.description}
          canonical={`${rootURL}blog/${slug}`}
          openGraph={{
            url: `${rootURL}blog/${slug}`,
            title: frontmatter.title,
            description: frontmatter.description,
          }}
          twitter={{
            handle: '@FrontEndCoach',
            cardType: 'summary',
          }}
        />
        <div className="max-w-750 m-auto px-3">
          <div className="flex justify-between">
            <Link href="/blog">
              <a 
                style={{width: 'fit-content'}} 
                className="flex items-center text-base font-bold"
              >
                <img 
                  alt="" 
                  src='/images/arrow-left.svg' 
                  width="22" 
                  height="22" 
                  style={{ margin: '0 0 0 -8px'}}
                /> Back to articles
              </a>
            </Link>
            <div>
              {frontmatter.tags.map((tag, i) => {
                return <span key={i} className="pill text-xs mr-1">{tag}</span>
              })}
            </div>
          </div>
          <DynamicRenderer 
            slug={slug} 
            markdownBody={markdownBody} 
            hasCodeBlock={frontmatter.codeBlock}
          />
        </div>
      </div>
      {articleLoaded && 
        <section className="mb-7 md:mb-8">
          <div className="wrapper px-3">
            <h2 className="text-center text-3xl md:text-4xl m-auto max-w-600">If you liked this article, you might like these ones, too</h2>
            <div className="mt-5 flex justify-between grid gap-3 grid-cols-suggested-blog-sm md:grid-cols-landing-blog-lg">
              <BlogPost suggested={true} posts={posts} limit={2}/>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const path = `${postsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(path, "utf8");
  const { content, data } = matter(fileContents);
  const parsedData = matter(content);

  return {
    props: {
      posts: getSuggestedBlogPosts(slug),
      frontmatter: data,
      markdownBody: parsedData.content,
      slug,
    }
  };
};

export default Post;
