import { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Zap,
    Search,
    Globe,
    ChevronDown,
    User,
    LogIn,
    UserPlus,
    Bell,
    Settings,
    HelpCircle,
    Moon,
    Sun,
} from 'lucide-react';
import { Button } from '../../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../ui/dialog';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-2xl'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center group cursor-pointer">
                            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <span className="ml-3 text-2xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                Tatum
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                        >
                            Pricing
                        </a>
                        <a
                            href="#docs"
                            className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                        >
                            Docs
                        </a>
                        <a
                            href="#about"
                            className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                        >
                            About
                        </a>
                    </nav>

                    {/* Search Bar - Center */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-300" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search features, docs, help..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-xl leading-5 bg-white/10 backdrop-blur-md placeholder-gray-400 text-white focus:outline-none focus:placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 sm:text-sm transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Right Side - Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                            {isDarkMode ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>

                        {/* Notifications */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 relative"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                        </Button>

                        {/* Language Selector */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <Globe className="h-4 w-4 mr-2" />
                                    <span className="hidden sm:inline">
                                        {selectedLanguage.flag}
                                    </span>
                                    <ChevronDown className="h-3 w-3 ml-1" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-slate-900/95 backdrop-blur-md border-white/20">
                                <DialogHeader>
                                    <DialogTitle className="text-white">
                                        Select Language
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-300">
                                        Choose your preferred language
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-2">
                                    {languages.map(lang => (
                                        <Button
                                            key={lang.code}
                                            variant={
                                                selectedLanguage.code ===
                                                lang.code
                                                    ? 'default'
                                                    : 'ghost'
                                            }
                                            className="w-full justify-start"
                                            onClick={() =>
                                                setSelectedLanguage(lang)
                                            }
                                        >
                                            <span className="mr-3">
                                                {lang.flag}
                                            </span>
                                            <span>{lang.name}</span>
                                        </Button>
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* User Menu */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-slate-900/95 backdrop-blur-md border-white/20">
                                <DialogHeader>
                                    <DialogTitle className="text-white">
                                        Account
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-300">
                                        Manage your account settings
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-white/10"
                                    >
                                        <User className="h-4 w-4 mr-3" />
                                        Profile
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-white/10"
                                    >
                                        <Settings className="h-4 w-4 mr-3" />
                                        Settings
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-white/10"
                                    >
                                        <HelpCircle className="h-4 w-4 mr-3" />
                                        Help & Support
                                    </Button>
                                    <div className="border-t border-white/20 my-2"></div>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-white/10"
                                    >
                                        <LogIn className="h-4 w-4 mr-3" />
                                        Sign In
                                    </Button>
                                    <Button className="w-full">
                                        <UserPlus className="h-4 w-4 mr-3" />
                                        Sign Up
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-white/20 bg-black/40 backdrop-blur-xl">
                        <div className="px-2 pt-4 pb-3 space-y-1">
                            {/* Mobile Search */}
                            <div className="px-3 py-2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={e =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-lg leading-5 bg-white/10 backdrop-blur-md placeholder-gray-500 text-white focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            {['Features', 'Pricing', 'Docs', 'About'].map(
                                item => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ),
                            )}

                            {/* Mobile Auth Buttons */}
                            <div className="border-t border-white/20 pt-3 mt-3 space-y-2">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-white hover:bg-white/10"
                                >
                                    <LogIn className="h-4 w-4 mr-3" />
                                    Sign In
                                </Button>
                                <Button className="w-full">
                                    <UserPlus className="h-4 w-4 mr-3" />
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
