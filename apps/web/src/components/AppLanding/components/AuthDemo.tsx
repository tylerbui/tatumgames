import React from 'react';
import { Button } from '../../ui/button';

interface AuthDemoProps {
    isAuthenticated: boolean;
    onToggleAuth: () => void;
}

export const AuthDemo: React.FC<AuthDemoProps> = ({
    isAuthenticated,
    onToggleAuth,
}) => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button
                onClick={onToggleAuth}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isAuthenticated
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
                {isAuthenticated ? 'Demo: Sign Out' : 'Demo: Sign In'}
            </Button>
        </div>
    );
};
