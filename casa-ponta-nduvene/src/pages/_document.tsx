import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Assistant:300,400,600,700|Source+Sans+Pro:300,400,400i,600,600i,700&amp;display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument