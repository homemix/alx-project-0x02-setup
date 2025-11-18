
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Posts: NextPage = () => {
    const { data: posts, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts',
        fetcher
    );

    return (
        <>
            <Head>
                <title>Posts | ALX Project 0x02</title>
                <meta name="description" content="List of posts from JSONPlaceholder API" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
                            All Posts
                        </h1>
                        <p className="text-xl text-gray-600">
                            Fetched live from JSONPlaceholder API
                        </p>
                    </div>

                    {isLoading && (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
                            <p className="mt-4 text-xl text-gray-600">Loading posts...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-red-600">Failed to load posts. Please try again later.</p>
                        </div>
                    )}

                    {posts && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.slice(0, 12).map((post: any) => (
                                <PostCard
                                    key={post.id}
                                    title={post.title}
                                    content={post.body}
                                    userId={post.userId}
                                />
                            ))}
                        </div>
                    )}

                    {posts && posts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-500">No posts found.</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default Posts;