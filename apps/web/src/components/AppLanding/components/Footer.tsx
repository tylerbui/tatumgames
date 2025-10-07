import { useState } from 'react';
import {
    Zap,
    Github,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    Heart,
    ExternalLink,
    Download,
    Star,
    Users,
    Globe,
} from 'lucide-react';
import { Button } from '../../ui/button';

export const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const productLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API Docs', href: '#docs' },
        { name: 'SDK', href: '#sdk' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Changelog', href: '#changelog' },
    ];

    const companyLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' },
        { name: 'Partners', href: '#partners' },
        { name: 'Contact', href: '#contact' },
    ];

    const supportLinks = [
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'Status', href: '#status' },
        { name: 'Security', href: '#security' },
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: '#github',
            color: 'hover:text-gray-400',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: '#twitter',
            color: 'hover:text-blue-400',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: '#linkedin',
            color: 'hover:text-blue-600',
        },
    ];

    return (
        <footer className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700">
            {/* Newsletter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Stay Updated
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Get the latest updates, features, and insights delivered
                        to your inbox. Join 50,000+ developers who trust Tatum.
                    </p>
                    <form
                        onSubmit={handleNewsletterSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        <Button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <span className="ml-3 text-2xl font-black text-white">
                                Tatum
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            The ultimate platform for modern web and mobile
                            development. Build, deploy, and scale with
                            confidence.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map(social => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {productLinks.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        {link.name}
                                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        {link.name}
                                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {supportLinks.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        {link.name}
                                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {[
                        { icon: Users, label: 'Active Users', value: '10M+' },
                        { icon: Globe, label: 'Countries', value: '180+' },
                        { icon: Star, label: 'Rating', value: '4.9/5' },
                        { icon: Download, label: 'Downloads', value: '1B+' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-3">
                                <stat.icon className="h-6 w-6 text-blue-400" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <div>
                            <div className="text-white font-semibold">
                                Email
                            </div>
                            <div className="text-gray-300">hello@tatum.dev</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <div>
                            <div className="text-white font-semibold">
                                Phone
                            </div>
                            <div className="text-gray-300">
                                +1 (555) 123-4567
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-blue-400" />
                        <div>
                            <div className="text-white font-semibold">
                                Location
                            </div>
                            <div className="text-gray-300">
                                San Francisco, CA
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 Tatum. All rights reserved. Made with{' '}
                            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
                            by developers, for developers.
                        </div>
                        <div className="flex items-center space-x-6">
                            <a
                                href="#privacy"
                                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                Terms of Service
                            </a>
                            <Button
                                onClick={scrollToTop}
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            >
                                <ArrowUp className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
