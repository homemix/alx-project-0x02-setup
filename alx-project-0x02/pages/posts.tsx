import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Posts | ALX Project 0x02</title>
                <meta name="description" content="List of posts fetched with getStaticProps" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
                            All Posts
                        </h1>
                        <p className="text-xl text-gray-600">
                            Fetched at build time using getStaticProps
                        </p>
                    </div>

                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-500">No posts available.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    title={post.title}
                                    content={post.body}
                                    userId={post.userId}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};


export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        // Take only first 12 posts (matches previous behavior)
        const posts = data.slice(0, 12).map((post: any) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
        }));

        return {
            props: {
                posts,
            },
            revalidate: 60, // Optional: revalidate every 60 seconds (ISR)
        };
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return {
            props: {
                posts: [],
            },
        };
    }
};

export default Posts;