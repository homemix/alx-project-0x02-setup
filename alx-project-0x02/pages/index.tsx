import {Head} from "next/document";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>ALX Project 0x02 | Home</title>
                <meta
                    name="description"
                    content="Next.js + TypeScript + Tailwind CSS + Pages Router"
                />
            </Head>

            {/*<Header/>*/}

            <main
                className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
                <div className="text-center py-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Welcome to ALX Project 0x02
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                        Next.js + TypeScript + Tailwind CSS + Pages Router
                    </p>

                    <div
                        className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105">
                        Setup Completed Successfully ✅
                    </div>
                </div>
            </main>
        </>
    );
}
