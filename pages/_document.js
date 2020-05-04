import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="description" content="Portfolio static website with NextJS"/>
        <meta name="google-site-verification" content="gIOwiBoW39Ycp5Ey9LnucITGp5NxJyA7h5DeJWzdzU0" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
