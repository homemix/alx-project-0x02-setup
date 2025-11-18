// components/layout/Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

const Header: FC = () => {
    const router = useRouter();

    const isActive = (pathname: string) => router.pathname === pathname;

    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/home" className="text-2xl font-bold tracking-tight hover:text-white/90 transition">
                            ALX Project 0x02
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-10">
                        <Link
                            href="/home"
                            data-active={isActive('/home')}
                            className="font-medium transition duration-200 data-[active=true]:text-yellow-300 data-[active=true]:underline underline-offset-4"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            data-active={isActive('/about')}
                            className="font-medium transition duration-200 data-[active=true]:text-yellow-300 data-[active=true]:underline underline-offset-4"
                        >
                            About
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button type="button" className="text-white hover:text-white/80">
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