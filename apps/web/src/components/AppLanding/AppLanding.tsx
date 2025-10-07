import { useState, useEffect } from 'react';
import {
    ArrowRight,
    Zap,
    Shield,
    Globe,
    CheckCircle,
    Star,
    Users,
    TrendingUp,
    Sparkles,
    Rocket,
    Heart,
    Award,
    ChevronRight,
    Play,
    Download,
    Github,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';

export const AppLanding = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <Zap className="h-8 w-8" />,
            title: 'Lightning Fast',
            description:
                'Built with Next.js 15 and React 19 for maximum performance',
            color: 'from-yellow-400 to-orange-500',
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: 'Enterprise Security',
            description: 'Bank-grade security with end-to-end encryption',
            color: 'from-blue-400 to-cyan-500',
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: 'Global Scale',
            description: 'Deploy anywhere with our worldwide infrastructure',
            color: 'from-green-400 to-emerald-500',
        },
        {
            icon: <Rocket className="h-8 w-8" />,
            title: 'AI-Powered',
            description: 'Smart automation and machine learning integration',
            color: 'from-purple-400 to-pink-500',
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: 'Developer First',
            description: 'Built by developers, for developers',
            color: 'from-red-400 to-pink-500',
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: 'Award Winning',
            description: 'Recognized by industry leaders worldwide',
            color: 'from-indigo-400 to-purple-500',
        },
    ];

    const stats = [
        {
            label: 'Active Users',
            value: '10M+',
            icon: <Users className="h-6 w-6" />,
        },
        {
            label: 'Uptime',
            value: '99.9%',
            icon: <TrendingUp className="h-6 w-6" />,
        },
        {
            label: 'Countries',
            value: '180+',
            icon: <Globe className="h-6 w-6" />,
        },
        {
            label: 'Satisfaction',
            value: '4.9/5',
            icon: <Star className="h-6 w-6" />,
        },
    ];

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'CTO, TechCorp',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
            content:
                'Tatum has revolutionized our development workflow. The speed and reliability are unmatched.',
            rating: 5,
        },
        {
            name: 'Marcus Johnson',
            role: 'Lead Developer, StartupXYZ',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            content:
                "The best platform I've used. The AI features are incredible and save us hours every day.",
            rating: 5,
        },
        {
            name: 'Elena Rodriguez',
            role: 'Product Manager, InnovateLab',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            content:
                "Tatum's analytics dashboard gives us insights we never had before. Game changer!",
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translate(-50%, ${scrollY * 0.1}px)` }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
                    style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                />
                <div
                    className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-2xl"
                    style={{
                        transform: `translate(${scrollY * 0.02}px, ${scrollY * -0.03}px)`,
                    }}
                />
            </div>

            <Header />

            {/* Hero Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        {/* Animated Badge */}
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-12 shadow-2xl animate-bounce">
                            <Sparkles className="h-4 w-4 mr-3 text-yellow-400 animate-spin" />
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                                New: AI-Powered Analytics Dashboard
                            </span>
                        </div>

                        {/* Main Heading with Typewriter Effect */}
                        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
                            Welcome to{' '}
                            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                                Tatum
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                            The ultimate platform for modern web and mobile
                            development. Build, deploy, and scale your
                            applications with ease using our cutting-edge
                            technology stack.
                        </p>

                        {/* Interactive CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            <Button className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">
                                    Get Started
                                </span>
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                            </Button>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-white/10 flex items-center"
                                    >
                                        <Play className="mr-3 h-6 w-6" />
                                        Watch Demo
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-slate-900/95 backdrop-blur-md border-white/20">
                                    <DialogHeader>
                                        <DialogTitle className="text-white">
                                            Tatum Platform Demo
                                        </DialogTitle>
                                        <DialogDescription className="text-gray-300">
                                            See how Tatum can transform your
                                            development workflow
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <Play className="h-16 w-16 text-white mx-auto mb-4" />
                                            <p className="text-white">
                                                Demo video would play here
                                            </p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    icon: (
                                        <CheckCircle className="h-6 w-6 text-emerald-400" />
                                    ),
                                    text: '10,000+ developers',
                                },
                                {
                                    icon: (
                                        <Shield className="h-6 w-6 text-blue-400" />
                                    ),
                                    text: 'Enterprise security',
                                },
                                {
                                    icon: (
                                        <Globe className="h-6 w-6 text-purple-400" />
                                    ),
                                    text: 'Global infrastructure',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    {item.icon}
                                    <span className="text-white font-semibold">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-white mb-6">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Everything you need to build, deploy, and scale
                            modern applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div
                                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="mt-6 flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    Learn more{' '}
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-black text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-white mb-6">
                            What Our Users Say
                        </h2>
                        <p className="text-xl text-gray-300">
                            Join thousands of satisfied developers worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center mb-6">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                        />
                                        <AvatarFallback>
                                            {testimonial.name
                                                .split(' ')
                                                .map(n => n[0])
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <div className="font-bold text-white">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 text-yellow-400 fill-current"
                                            />
                                        ),
                                    )}
                                </div>
                                <p className="text-gray-300 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                        <h2 className="text-5xl font-black text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of developers building the future
                            with Tatum
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25">
                                Start Free Trial
                                <ArrowRight className="ml-3 h-6 w-6" />
                            </Button>
                            <Button
                                variant="outline"
                                className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center"
                            >
                                <Download className="mr-3 h-6 w-6" />
                                Download SDK
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
