import React, { useState } from 'react';
import { Button } from '../../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import {
    User,
    Settings,
    Palette,
    Accessibility,
    LogOut,
    ChevronRight,
    Menu,
    X,
} from 'lucide-react';

interface HamburgerMenuProps {
    isAuthenticated?: boolean;
    onSignIn?: () => void;
    onSignUp?: () => void;
    onSignOut?: () => void;
    onProfileClick?: () => void;
    onSettingsClick?: () => void;
    onAppearanceClick?: () => void;
    onAccessibilityClick?: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    isAuthenticated = false,
    onSignIn,
    onSignUp,
    onSignOut,
    onProfileClick,
    onSettingsClick,
    onAppearanceClick,
    onAccessibilityClick,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSignIn = () => {
        setIsOpen(false);
        onSignIn?.();
    };

    const handleSignUp = () => {
        setIsOpen(false);
        onSignUp?.();
    };

    const handleSignOut = () => {
        setIsOpen(false);
        onSignOut?.();
    };

    const handleProfileClick = () => {
        setIsOpen(false);
        onProfileClick?.();
    };

    const handleSettingsClick = () => {
        setIsOpen(false);
        onSettingsClick?.();
    };

    const handleAppearanceClick = () => {
        setIsOpen(false);
        onAppearanceClick?.();
    };

    const handleAccessibilityClick = () => {
        setIsOpen(false);
        onAccessibilityClick?.();
    };

    return (
        <div className="lg:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    {!isAuthenticated ? (
                        // Not authenticated - show sign in/up options
                        <>
                            <div className="px-3 py-2">
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                    Welcome to Tatum
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Sign in to access your account
                                </p>
                            </div>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={handleSignIn}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center space-x-3">
                                    <User className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <div className="font-medium text-gray-900 dark:text-white">
                                            Sign In
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Access your account
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={handleSignUp}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">
                                            +
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900 dark:text-white">
                                            Sign Up
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Create a new account
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                        </>
                    ) : (
                        // Authenticated - show account options
                        <>
                            <div className="px-3 py-2">
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                    Welcome back!
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Manage your account and preferences
                                </p>
                            </div>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={handleProfileClick}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center space-x-3">
                                        <User className="h-5 w-5 text-blue-600" />
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                Profile
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                View and edit your profile
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={handleSettingsClick}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center space-x-3">
                                        <Settings className="h-5 w-5 text-green-600" />
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                Settings
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                Account and privacy settings
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={handleAppearanceClick}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center space-x-3">
                                        <Palette className="h-5 w-5 text-purple-600" />
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                Appearance
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                Theme and display preferences
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={handleAccessibilityClick}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center space-x-3">
                                        <Accessibility className="h-5 w-5 text-orange-600" />
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                Accessibility
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                Accessibility and assistive
                                                features
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={handleSignOut}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 text-red-600 dark:text-red-400"
                            >
                                <div className="flex items-center space-x-3">
                                    <LogOut className="h-5 w-5" />
                                    <div className="font-medium">Sign Out</div>
                                </div>
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
