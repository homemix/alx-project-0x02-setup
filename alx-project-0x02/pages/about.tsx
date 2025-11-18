import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | ALX Project 0x02</title>
                <meta name="description" content="Reusable Button component demo" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8">
                        Reusable Button Component
                    </h1>
                    <p className="text-xl text-gray-700 mb-16">
                        Fully typed • Configurable size & shape • Beautiful gradients
                    </p>

                    <div className="flex flex-col items-center space-y-12">
                        {/* Small + rounded-sm */}
                        <div>
                            <p className="text-lg font-medium text-gray-600 mb-4">Small + rounded-sm</p>
                            <Button size="small" shape="rounded-sm">
                                Small Sharp Button
                            </Button>
                        </div>

                        {/* Medium + rounded-full */}
                        <div>
                            <p className="text-lg font-medium text-gray-600 mb-4">Medium + rounded-full</p>
                            <Button size="medium" shape="rounded-full">
                                Pill-Shaped Button
                            </Button>
                        </div>

                        {/* Large + rounded-lg */}
                        <div>
                            <p className="text-lg font-medium text-gray-600 mb-4">Large + rounded-lg</p>
                            <Button size="large" shape="rounded-lg">
                                Big Bold Button
                            </Button>
                        </div>
                    </div>

                    <div className="mt-20">
                        <p className="text-3xl">✅ Objective Complete!</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;