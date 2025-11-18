// pages/home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home | ALX Project 0x02</title>
                <meta name="description" content="Home page of ALX Next.js project" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        Home Page
                    </h1>
                    <p className="text-xl text-gray-700">Welcome to the Home route!</p>
                </div>
            </main>
        </>
    );
};

export default Home;