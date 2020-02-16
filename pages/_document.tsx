import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
            />
            <link href="https://fonts.googleapis.com/css?family=Coda+Caption:800|Sriracha&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="/fabric.min.css"></link>
        </Head>
        <body>
          <div id='loader'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument