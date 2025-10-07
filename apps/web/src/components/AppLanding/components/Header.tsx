import { useState, useEffect } from 'react';
import { Menu, X, Zap, Search, Globe, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';
import { HamburgerMenu } from './HamburgerMenu';
import { AuthDemo } from './AuthDemo';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Demo state

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menu handler functions
    const handleSignIn = () => {
        setIsAuthenticated(true);
        console.log('Sign In clicked');
        // Add your sign in logic here
    };

    const handleSignUp = () => {
        console.log('Sign Up clicked');
        // Add your sign up logic here
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
        console.log('Sign Out clicked');
        // Add your sign out logic here
    };

    const handleProfileClick = () => {
        console.log('Profile clicked');
        // Add your profile navigation logic here
    };

    const handleSettingsClick = () => {
        console.log('Settings clicked');
        // Add your settings navigation logic here
    };

    const handleAppearanceClick = () => {
        console.log('Appearance clicked');
        // Add your appearance settings logic here
    };

    const handleAccessibilityClick = () => {
        console.log('Accessibility clicked');
        // Add your accessibility settings logic here
    };

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
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>

                        {/* Sign Up */}
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:inline-flex"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>

                        {/* Hamburger Menu */}
                        <HamburgerMenu
                            isAuthenticated={isAuthenticated}
                            onSignIn={handleSignIn}
                            onSignUp={handleSignUp}
                            onSignOut={handleSignOut}
                            onProfileClick={handleProfileClick}
                            onSettingsClick={handleSettingsClick}
                            onAppearanceClick={handleAppearanceClick}
                            onAccessibilityClick={handleAccessibilityClick}
                        />
                    </div>
                </div>
            </div>

            {/* Demo Auth Toggle */}
            <AuthDemo
                isAuthenticated={isAuthenticated}
                onToggleAuth={() => setIsAuthenticated(!isAuthenticated)}
            />
        </header>
    );
};
