import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              min-height: 100%;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
            }
          `}</style>
        </body>
      </Html>
    )
  }
}

export default MyDocument