import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | ALX Project 0x02</title>
            </Head>

            <Header />  {/* ← Reusable Header */}

            <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8">
                        About This Project
                    </h1>
                    <p className="text-xl text-gray-700 mb-16">
                        A fully featured Next.js app with reusable components, routing, modals, and more!
                    </p>

                    <div className="space-y-8">
                        <Button size="small" shape="rounded-sm">Small Button</Button>
                        <Button size="medium" shape="rounded-full">Medium Pill</Button>
                        <Button size="large" shape="rounded-lg">Large Button</Button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;