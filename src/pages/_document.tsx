import { Html, Head, Main, NextScript } from "next/document";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

export default function Document() {
    return (
        <Html className="h-full">
            <Head>
                <style>{dom.css()}</style>
            </Head>
            <body className="h-full bg-black text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
