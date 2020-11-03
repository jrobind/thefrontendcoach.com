import React from "react";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Twitter, Facebook, Linkedin } from 'react-social-sharing'


const postsDirectory = join(process.cwd(), "/posts");

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={vscDarkPlus} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

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
            <a style={{width: 'fit-content'}} className="flex items-center text-base font-bold"><img alt="" src='/images/arrow-left.svg' style={{width: '22px', margin: '0 0 0 -8px'}}/> Back to articles</a>
          </Link>
          <div>
            {frontmatter.tags.map((tag, i) => {
              return <span key={i} className="pill text-xs mr-1">{tag}</span>
            })}
          </div>
        </div>
        <section className="blog-post__content">
          <ReactMarkdown
            escapeHtml={true}
            source={markdownBody}
            renderers={{ code: CodeBlock }}
          />
        </section>
        <div className="flex justify-between my-6 md:my-7">
          <Link href="/blog">
            <a style={{width: 'fit-content'}} className="flex items-center text-base font-bold"><img alt="" src='/images/arrow-left.svg' style={{width: '22px', margin: '0 0 0 -8px'}}/> Back to articles</a>
          </Link>
          <div className="flex">
            <Facebook solid small link={`${rootURL}blog/${slug}`}/>
            <Twitter solid small link={`${rootURL}blog/${slug}`}/>
            <Linkedin solid small link={`${rootURL}blog/${slug}`}/>
          </div>
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
