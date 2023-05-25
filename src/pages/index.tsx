import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 text-black main-container">
        Hello World from new planet!!
      </section>
    </>
  );
}

Home.pageOptions = {
  requiresAuth: false,
};
