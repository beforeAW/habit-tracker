"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          Track Your Habits
        </h1>
        <p className="text-gray-600 mb-6">
          Build better habits, one day at a time. Please log in to continue.
        </p>
        <Link href="/login">
          <Button variant="primary" size="md" className="w-full">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
