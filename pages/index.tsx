import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-blue-600 flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Cretara.dev site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        <h1 className="text-6xl font-bold">Welcome to Cretara.dev</h1>
      </main>
    </div>
  );
};

export default Home;
