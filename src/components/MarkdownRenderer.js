import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import vs2015 from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';

SyntaxHighlighter.registerLanguage('javascript', js);


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

export default function MarkdownRenderer({ markdownBody, hasCodeBlock }) {
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
    <ReactMarkdown
      escapeHtml={true}
      source={markdownBody}
      renderers={renderers}
    />
  );
}
