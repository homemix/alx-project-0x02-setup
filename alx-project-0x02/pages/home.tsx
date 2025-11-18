// pages/home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

const Home: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (newPost: Omit<Post, 'id'>) => {
        setPosts(prev => [{ ...newPost, id: Date.now() }, ...prev]);
    };

    return (
        <>
            <Head>
                <title>Home | ALX Project 0x02</title>
            </Head>

            <Header />  {/* ← Reusable Header */}

            <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                        Welcome to Home Page
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition"
                    >
                        Create New Post
                    </button>

                    {posts.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                            {posts.map(post => (
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