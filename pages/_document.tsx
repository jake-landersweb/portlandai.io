import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html style={{ "scrollPaddingTop": "65px" }} className="scroll-smooth bg-main-950 text-lt">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
