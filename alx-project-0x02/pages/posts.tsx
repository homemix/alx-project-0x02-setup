// pages/posts.tsx
import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Head from "next/head";

const Posts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Posts | ALX Project 0x02</title>
            </Head>

            <Header />  {/* ← Reusable Header */}

            <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
                        All Posts Page
                    </h1>
                    <p className="text-xl text-gray-600">
                        This page will eventually list all posts from an API or database.
                    </p>
                    <div className="mt-16 p-10 bg-white/70 rounded-2xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-700">Coming Soon! 🚀</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Posts;