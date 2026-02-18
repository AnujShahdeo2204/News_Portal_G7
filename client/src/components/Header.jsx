
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, LogOut, User, Mail, PenLine } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const navLinks = [
        'Art market', 'Museums & heritage', 'Exhibitions', 'Books', 'Podcasts',
        'Columns', 'Technology', 'Adventures with Van Gogh', 'Venice Biennale',
        'Art on Location'
    ];

    return (
        <header className="bg-white">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center relative">
                    {/* Subscribe Button (Left) */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#D93025] text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-red-700 transition">
                            Subscribe
                        </button>
                        <div className="hidden md:flex items-center space-x-2 text-gray-500 text-sm">
                            <span className="flex items-center"><PenLine size={14} className="mr-1" /> ePaper</span>
                            <span className="flex items-center"><Mail size={14} className="mr-1" /> Newsletters</span>
                        </div>
                    </div>

                    {/* Logo (Center) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                        <Link to="/" className="text-4xl md:text-5xl font-serif font-bold text-[#D93025] tracking-tight">
                            THE ART NEWSPAPER
                        </Link>
                        <div className="flex justify-center mt-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_Art_Newspaper_logo.svg/1200px-The_Art_Newspaper_logo.svg.png" alt="logo icon" className="h-6 opacity-80" style={{ display: 'none' }} />
                            {/* Using text for similarity to screenshot, keeping simpler for now */}
                        </div>
                    </div>

                    {/* Search/User (Right) */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-700 hover:text-black">
                            <Search size={20} className="mr-2" />
                            <span className="text-sm font-medium">Search</span>
                        </button>

                        {user ? (
                            <div className="flex items-center space-x-3 ml-4 border-l pl-4 border-gray-300">
                                <span className="text-sm font-medium text-gray-900">{user.name}</span>
                                <button onClick={logout} className="text-gray-500 hover:text-red-600">
                                    <LogOut size={18} />
                                </button>
                                <Link to="/create-news" className="text-sm text-blue-600 font-semibold hover:underline">
                                    Write
                                </Link>
                            </div>
                        ) : (
                            <div className="ml-4 flex items-center space-x-2 text-sm">
                                <User size={18} className="text-gray-500" />
                                <Link to="/login" className="text-gray-700 hover:text-black">Sign in</Link>
                                <span className="text-gray-400">/</span>
                                <Link to="/register" className="text-gray-700 hover:text-black">Create account</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="border-t border-b border-gray-200 py-3">
                <div className="container mx-auto px-4">
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <Link to="/" className="hover:text-[#D93025] transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-[#B92B27] to-[#D93025] text-white py-3 text-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <span className="font-semibold text-lg">
                        Enjoy 8 weeks of The Art Newspaper for free // Unlock unrestricted digital access today
                    </span>
                    <button className="bg-[#8B1E1A] text-white px-4 py-1 text-sm font-semibold rounded hover:bg-[#681613]">
                        Free trial
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
