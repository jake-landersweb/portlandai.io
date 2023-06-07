import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return <>
        <Head>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QC05WSRCX"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2QC05WSRCX');
            `,
                }}
            /> */}
        </Head>
        <div className="scroll-smooth">
            <main>
                <div className="">
                    <Component {...pageProps} />
                </div>
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </div>
    </>
}

export default MyApp