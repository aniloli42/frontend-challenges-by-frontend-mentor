import { NextScript, Main, Html, Head } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,regular,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="bg-veryDarkBlue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
