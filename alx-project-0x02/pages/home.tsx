
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';
import {Post} from "@/interfaces";



const Home: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (newPost: Omit<Post, 'id'>) => {
        const postWithId = { ...newPost, id: Date.now() };
        setPosts((prev) => [postWithId, ...prev]); // Newest first
    };

    return (
        <>
            <Head>
                <title>Home | ALX Project 0x02</title>
                <meta name="description" content="Dynamic posts with modal input" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                            Dynamic Posts Feed
                        </h1>
                        <p className="text-xl text-gray-600">Click below to create a new post!</p>
                    </div>

                    {/* Add Post Button */}
                    <div className="text-center mb-12">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Create New Post
                        </button>
                    </div>

                    {/* Posts Grid */}
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-500">No posts yet. Be the first to create one! 🚀</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <Card key={post.id} title={post.title} content={post.content} />
                            ))}
                        </div>
                    )}
                </div>


                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddPost={handleAddPost}
                />
            </main>
        </>
    );
};

export default Home;