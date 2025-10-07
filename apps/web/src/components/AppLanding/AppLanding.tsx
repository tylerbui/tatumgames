import React from 'react';
import { Button } from '../ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Header } from './components/Header';
import {
    ArrowRight,
    Zap,
    Shield,
    Globe,
    Users,
    Star,
    Github,
    Twitter,
    Linkedin,
    CheckCircle,
    Sparkles,
    Rocket,
    Lock,
    Clock,
    ShoppingBag,
    Heart,
    TrendingUp,
    Play,
} from 'lucide-react';

const features = [
    {
        icon: <ShoppingBag className="h-6 w-6" />,
        title: 'Shop Now',
        description:
            'Shop electronics, fashion, home, and more — with fast shipping and unbeatable prices.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        iconBg: 'bg-blue-100',
    },
    {
        icon: <CheckCircle className="h-6 w-6" />,
        title: 'Browse Collections',
        description:
            'Discover new arrivals, seasonal picks, and customer favorites.',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        iconBg: 'bg-green-100',
    },
    {
        icon: <Heart className="h-6 w-6" />,
        title: 'Get Started',
        description: 'Sign up for free and unlock exclusive deals.',
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
        iconBg: 'bg-purple-100',
    },
];

export function AppLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Header />

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                            Welcome to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Tatum
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            Your all-in-one platform for productivity,
                            collaboration, and growth. Experience the future of
                            work with our integrated suite of tools.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Features Preview */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                            >
                                <CardContent className="p-0">
                                    <div className="text-center">
                                        <div
                                            className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                                        >
                                            <div className={feature.color}>
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <p>Welcome back — let's get you building.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
