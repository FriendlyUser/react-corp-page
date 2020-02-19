import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { Stylesheet, InjectionMode, resetIds } from 'office-ui-fabric-react';

interface Props {
  styleTags: any
}
export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    const stylesheet = Stylesheet.getInstance();
    stylesheet.setConfig({
        injectionMode: InjectionMode.none,
        namespace: 'server'      
    });
    stylesheet.reset();
    resetIds();

    const page = renderPage((App: any) => (props: any) => <App {...props} />);
    
    return { ...page, styleTags: stylesheet.getRules(true) };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta name="viewport" content="width=400, initial-scale=1"></meta>
          <style type="text/css" dangerouslySetInnerHTML={{__html: this.props.styleTags}} />
          <link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css" />         
        </Head>
        <body className="ms-Fabric" dir="ltr">
          <div id='loader'></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}