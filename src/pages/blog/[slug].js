import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={vscDarkPlus} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Post = ({ frontmatter, markdownBody }) => {
  return (
    <main className="blog-post">
      <Head>
        <title>{frontmatter.title}</title>
        <meta title="description" content={frontmatter.description} />
      </Head>
      <div className="wrapper my-6 md:my-7">
        <Link href="/blog">
          <a className="flex items-center text-base font-bold"><img alt="" src='/images/arrow-left.svg'/> Back to articles</a>
        </Link>
        <ReactMarkdown
          escapeHtml={true}
          source={markdownBody}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </main>
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
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    }
  };
};

export default Post;
