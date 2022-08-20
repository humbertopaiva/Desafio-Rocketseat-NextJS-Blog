import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import Header from '../components/Header';
import commonStyles from '../styles/common.module.scss';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Header />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
