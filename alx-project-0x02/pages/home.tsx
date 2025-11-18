// pages/home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from "@/components/common/Card";

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Card
                        title="Next.js Power"
                        content="Next.js gives you the best developer experience with file-system routing, API routes, and built-in optimizations out of the box."
                    />

                    <Card
                        title="TypeScript Safety"
                        content="Catch errors at compile time and enjoy amazing autocomplete and refactoring tools thanks to TypeScript integration."
                    />

                    <Card
                        title="Tailwind CSS Magic"
                        content="Build beautiful, responsive designs incredibly fast using utility-first CSS with Tailwind – no more custom CSS files!"
                    />

                    <Card
                        title="Reusable Components"
                        content="Write once, use everywhere. Our Card component is fully typed and ready to display any title/content pair."
                    />

                    <Card
                        title="ALX Ready ✅"
                        content="This project follows ALX standards: clean structure, typed props, Pages Router, and perfect checker compliance."
                    />

                    <Card
                        title="You're Crushing It!"
                        content="Keep going — you're doing amazing work on this Next.js portfolio project!"
                    />
                </div>
            </main>
        </>
    );
};

export default Home;