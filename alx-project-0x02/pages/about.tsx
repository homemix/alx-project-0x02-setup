// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | ALX Project 0x02</title>
                <meta name="description" content="About page of ALX Next.js project" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                        About Page
                    </h1>
                    <p className="text-xl text-gray-700">This is the About route using Pages Router.</p>
                </div>
            </main>
        </>
    );
};

export default About;