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

const Heading = ({ value }) => { // TODO
  return <img alt={alt} src={src} width="600" height="400"/>
}

export default function MarkdownRenderer({ markdownBody, hasCodeBlock }) {
  const renderers =  hasCodeBlock ? { code: CodeBlock, image: Image } : { image: Image };

  return (
    <ReactMarkdown
      escapeHtml={true}
      source={markdownBody}
      renderers={renderers}
    />
  );
}
