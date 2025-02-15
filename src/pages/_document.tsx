// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ua'>
        <Head>
          {/* Подключаем внешние шрифты через Document */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <div id='modal-root'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
