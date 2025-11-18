// components/layout/Header.tsx
import Link from 'next/link';
import type { FC } from 'react';

const Header: FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-white/90 transition">
                            ALX Project 0x02
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-10">
                        <Link
                            href="/"
                            className="font-medium hover:text-white/80 transition duration-200 ease-in-out"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="font-medium hover:text-white/80 transition duration-200 ease-in-out"
                        >
                            About
                        </Link>
                        <Link
                            href="/posts"
                            className="font-medium hover:text-white/80 transition duration-200 ease-in-out"
                        >
                            Posts
                        </Link>
                        <Link
                            href="/users"
                            className="font-medium hover:text-white/80 transition duration-200 ease-in-out"
                        >
                            Users
                        </Link>
                    </div>

                    {/* Mobile menu placeholder (you can expand later) */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-white hover:text-white/80 focus:outline-none"
                            aria-label="Open menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;