import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
    return (
        <Html style={{ "scrollPaddingTop": "65px" }} className="scroll-smooth bg-main-950 text-lt">
            <Head>{CssBaseline.flush()}</Head>
            <body className="scroll-smooth bg-main-950 text-lt">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
