/* eslint-disable class-methods-use-this */
import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='ca'>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin='true' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
