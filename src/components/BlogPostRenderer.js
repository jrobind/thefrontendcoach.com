import dynamic from 'next/dynamic'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import html from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import vs2015 from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';
import Link from "next/link";
import { rootURL } from '../lib/constants';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('xml', xml);

const DynamicSharing = dynamic(() => import('./Sharing'));


const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={vs2015} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Image = ({ alt, src }) => {
  return <img alt={alt} src={src} width="600" height="400"/>
}

const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

const HeadingRenderer = (props) => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase()
    .replace(/\?/g, '')
    .replace("'", '')
    .replace(/\W/g, '-');

  return React.createElement('h' + props.level, { id: slug }, props.children);
}

export default function MarkdownRenderer({ markdownBody, hasCodeBlock, slug }) {
  const renderers =  hasCodeBlock ? 
    { 
      heading: HeadingRenderer,
      code: CodeBlock,
      image: Image, 
    } : 
    { 
      heading: HeadingRenderer,
      image: Image
    };

  return (
    <>
      <section className="blog-post__content">
        <ReactMarkdown
          escapeHtml={true}
          source={markdownBody}
          renderers={renderers}
        />
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
    </>
  );
}
