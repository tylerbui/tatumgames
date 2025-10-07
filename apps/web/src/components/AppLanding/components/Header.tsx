import { useState, useEffect } from 'react';
import { Menu, X, Zap, Search, Globe, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center group cursor-pointer">
                            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                Tatum
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600 dark:text-gray-300 font-medium">
                                Getting started
                            </span>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600 dark:text-gray-300 font-medium">
                                Trending
                            </span>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                    </nav>

                    {/* Search Bar - Center */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-600 rounded-xl leading-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Globe */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <Globe className="h-5 w-5" />
                        </Button>

                        {/* Language dropdown */}
                        <div className="hidden md:flex items-center space-x-2">
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                US
                            </span>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>

                        {/* Sign In */}
                        <Button
                            variant="ghost"
                            className="hidden sm:inline-flex text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Sign In
                        </Button>

                        {/* Sign Up */}
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:inline-flex">
                            Sign Up
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden text-gray-600 dark:text-gray-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
                        <nav className="py-4 space-y-4">
                            <div className="px-4 py-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                                        Getting started
                                    </span>
                                    <ChevronDown className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="px-4 py-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                                        Trending
                                    </span>
                                    <ChevronDown className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="px-4 py-2">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex space-x-4">
                                <Button
                                    variant="ghost"
                                    className="flex-1 text-gray-700 dark:text-gray-300"
                                >
                                    Sign In
                                </Button>
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                                    Sign Up
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
