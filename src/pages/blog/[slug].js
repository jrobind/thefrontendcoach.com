import React from "react";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Link from "next/link";
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import Loader from 'react-loader-spinner';

const DynamicRenderer = dynamic(
  () => import('../../components/MarkdownRenderer'),
  { 
    loading: () =>  
      <div className="flex justify-center">
        <Loader type="ThreeDots" color="#2B8275" height={100} width={100} />
      </div>
  }
 );
const DynamicSharing = dynamic(() => import('../../components/Sharing'));
const postsDirectory = join(process.cwd(), "/posts");


const Post = ({ frontmatter, markdownBody, slug }) => {
  return (
    <div className="blog-post wrapper">
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        canonical={`${rootURL}blog/${slug}`}
        openGraph={{
          url: `${rootURL}blog/${slug}`,
          title: frontmatter.title,
          description: frontmatter.description,
        }}  
      />
      <div className="max-w-750 m-auto my-6 md:my-7 px-3">
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
        <section className="blog-post__content">
            <DynamicRenderer markdownBody={markdownBody} hasCodeBlock={frontmatter.codeBlock} />
        </section>
        <div className="flex justify-between my-6 md:my-7">
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
                style={{margin: '0 0 0 -8px'}}
              /> Back to articles
            </a>
          </Link>
          <DynamicSharing rootURL={rootURL} slug={slug} />
        </div>
      </div>
    </div>
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
      frontmatter: data,
      markdownBody: parsedData.content,
      slug,
    }
  };
};

export default Post;
