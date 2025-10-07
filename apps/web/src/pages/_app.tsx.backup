import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
                    min-height: 100vh;
                }
                
                .min-h-screen { min-height: 100vh; }
                .bg-gradient-to-br { background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%); }
                .fixed { position: fixed; }
                .top-0 { top: 0; }
                .left-0 { left: 0; }
                .right-0 { right: 0; }
                .z-50 { z-index: 50; }
                .container { max-width: 1200px; margin: 0 auto; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .px-4 { padding-left: 1rem; padding-right: 1rem; }
                .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
                .text-center { text-align: center; }
                .max-w-4xl { max-width: 56rem; }
                .flex { display: flex; }
                .items-center { align-items: center; }
                .justify-between { justify-content: space-between; }
                .justify-center { justify-content: center; }
                .h-16 { height: 4rem; }
                .mb-16 { margin-bottom: 4rem; }
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                .mb-4 { margin-bottom: 1rem; }
                .mb-2 { margin-bottom: 0.5rem; }
                .ml-3 { margin-left: 0.75rem; }
                .mr-2 { margin-right: 0.5rem; }
                .p-2 { padding: 0.5rem; }
                .p-6 { padding: 1.5rem; }
                .px-8 { padding-left: 2rem; padding-right: 2rem; }
                .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
                .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
                .rounded-xl { border-radius: 0.75rem; }
                .rounded-lg { border-radius: 0.5rem; }
                .text-5xl { font-size: 3rem; line-height: 1; }
                .text-2xl { font-size: 1.5rem; line-height: 2rem; }
                .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
                .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
                .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                .font-bold { font-weight: 700; }
                .font-semibold { font-weight: 600; }
                .font-medium { font-weight: 500; }
                .text-gray-900 { color: #111827; }
                .text-gray-600 { color: #4b5563; }
                .text-gray-500 { color: #6b7280; }
                .text-gray-400 { color: #9ca3af; }
                .text-white { color: #ffffff; }
                .text-blue-600 { color: #2563eb; }
                .text-blue-500 { color: #3b82f6; }
                .text-green-600 { color: #059669; }
                .text-purple-600 { color: #9333ea; }
                .bg-white { background-color: #ffffff; }
                .bg-blue-100 { background-color: #dbeafe; }
                .bg-green-100 { background-color: #dcfce7; }
                .bg-purple-100 { background-color: #f3e8ff; }
                .bg-blue-600 { background-color: #2563eb; }
                .bg-blue-700 { background-color: #1d4ed8; }
                .bg-gradient-to-r { background: linear-gradient(to right, var(--tw-gradient-stops)); }
                .from-blue-500 { --tw-gradient-from: #3b82f6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0)); }
                .to-purple-600 { --tw-gradient-to: #9333ea; }
                .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0)); }
                .to-purple-600 { --tw-gradient-to: #9333ea; }
                .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
                .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
                .border-2 { border-width: 2px; }
                .border-gray-300 { border-color: #d1d5db; }
                .text-gray-700 { color: #374151; }
                .hover\\:border-blue-500:hover { border-color: #3b82f6; }
                .hover\\:text-blue-600:hover { color: #2563eb; }
                .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                .duration-200 { transition-duration: 200ms; }
                .grid { display: grid; }
                .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                .gap-8 { gap: 2rem; }
                .gap-4 { gap: 1rem; }
                .space-x-8 > * + * { margin-left: 2rem; }
                .space-x-4 > * + * { margin-left: 1rem; }
                .space-x-2 > * + * { margin-left: 0.5rem; }
                .w-12 { width: 3rem; }
                .h-12 { height: 3rem; }
                .h-6 { height: 1.5rem; }
                .w-6 { width: 1.5rem; }
                .h-5 { height: 1.25rem; }
                .w-5 { width: 1.25rem; }
                .h-4 { height: 1rem; }
                .w-4 { width: 1rem; }
                .h-10 { height: 2.5rem; }
                .w-10 { width: 2.5rem; }
                .hidden { display: none; }
                .lg\\:flex { display: flex; }
                .sm\\:flex-row { flex-direction: row; }
                .flex-col { flex-direction: column; }
                .flex-1 { flex: 1 1 0%; }
                .max-w-md { max-width: 28rem; }
                .mx-8 { margin-left: 2rem; margin-right: 2rem; }
                .relative { position: relative; }
                .absolute { position: absolute; }
                .inset-y-0 { top: 0; bottom: 0; }
                .left-0 { left: 0; }
                .pl-3 { padding-left: 0.75rem; }
                .pr-3 { padding-right: 0.75rem; }
                .pl-10 { padding-left: 2.5rem; }
                .block { display: block; }
                .w-full { width: 100%; }
                .border { border-width: 1px; }
                .border-gray-200 { border-color: #e5e7eb; }
                .rounded-full { border-radius: 9999px; }
                .leading-5 { line-height: 1.25rem; }
                .bg-white\\/80 { background-color: rgba(255, 255, 255, 0.8); }
                .backdrop-blur-md { backdrop-filter: blur(12px); }
                .placeholder-gray-500::placeholder { color: #6b7280; }
                .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
                .focus\\:ring-2:focus { box-shadow: 0 0 0 2px #3b82f6; }
                .focus\\:ring-blue-500:focus { box-shadow: 0 0 0 2px #3b82f6; }
                .focus\\:border-blue-500:focus { border-color: #3b82f6; }
                .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                .duration-300 { transition-duration: 300ms; }
                .group { position: relative; }
                .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
                .group:hover .group-hover\\:bg-gradient-to-r { background: linear-gradient(to right, var(--tw-gradient-stops)); }
                .group:hover .group-hover\\:from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0)); }
                .group:hover .group-hover\\:to-purple-600 { --tw-gradient-to: #9333ea; }
                .group:hover .group-hover\\:bg-clip-text { background-clip: text; }
                .group:hover .group-hover\\:text-transparent { color: transparent; }
                .transform { transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1); }
                .text-transparent { color: transparent; }
                .bg-clip-text { background-clip: text; }
                .text-card-foreground { color: #111827; }
                .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .border-0 { border-width: 0; }
                .p-0 { padding: 0; }
                .leading-relaxed { line-height: 1.625; }
                
                @media (min-width: 640px) {
                    .sm\\:flex-row { flex-direction: row; }
                    .sm\\:inline-flex { display: inline-flex; }
                }
                
                @media (min-width: 768px) {
                    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                    .md\\:flex { display: flex; }
                    .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
                }
                
                @media (min-width: 1024px) {
                    .lg\\:flex { display: flex; }
                    .lg\\:hidden { display: none; }
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
