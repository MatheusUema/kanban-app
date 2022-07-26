/* eslint-disable react/no-danger */
import React from 'react';

import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
    // return result;
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" type="image/png" href="https://letscode.com.br/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
          <meta charSet='utf-8'/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          {/* Google Tag Manager - Global base code */}
       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
