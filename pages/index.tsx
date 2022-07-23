import type {NextPage} from "next";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
    return (
        <div className="bg-blue-600 flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Cretara.dev site</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Script strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
                <h1 className="text-6xl font-bold">Welcome to Cretara.dev</h1>
            </main>
        </div>
    );
};

export default Home;
