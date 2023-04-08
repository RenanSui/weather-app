import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />

            {/* weather app */}
            {/* <body className="bg-[#111]"> */}

            {/* expense tracker app */}
            <body className="bg-[#121212]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
