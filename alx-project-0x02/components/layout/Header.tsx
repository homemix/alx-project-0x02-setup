import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

const Header: FC = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const navItems = [
        { href: '/home', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/posts', label: 'Posts' },
    ];

    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-2xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/home"
                            className="text-2xl font-extrabold tracking-tight hover:text-white/90 transition"
                        >
                            ALX Project 0x02
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  hover:bg-white/20
                  ${currentPath === item.href
                                    ? 'bg-white/30 underline underline-offset-4 font-bold'
                                    : 'hover:text-white'
                                }
                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-white hover:text-white/80">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;