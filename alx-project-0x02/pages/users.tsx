// pages/users.tsx
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
    users: UserProps[];
}

const Users: NextPage<UsersPageProps> = ({ users }) => {
    return (
        <>
            <Head>
                <title>Users | ALX Project 0x02</title>
                <meta name="description" content="List of users from JSONPlaceholder" />
            </Head>

            <Header />

            <main className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
                            Our Users
                        </h1>
                        <p className="text-xl text-gray-600">
                            Fetched at build time using getStaticProps from JSONPlaceholder
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {users.map((user) => (
                            <UserCard key={user.id} {...user} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: UserProps[] = await res.json();

        return {
            props: {
                users,
            },
            revalidate: 3600, // Revalidate every hour
        };
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return {
            props: {
                users: [],
            },
        };
    }
};

export default Users;