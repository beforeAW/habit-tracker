import React from 'react';
import Button from '@/components/Button';

const Login = () => {
    return (
        <form className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Login</h2>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    autoComplete="email" 
                    className="mt-1 block w-full border-2 border-gray-400 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                    required 
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    autoComplete="current-password" 
                    className="mt-1 block w-full border-2 border-gray-400 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                    required 
                />
            </div>
            <Button type="submit" variant="primary" className="w-full">
                Login
            </Button>
        </form>
    );
};

export default Login;