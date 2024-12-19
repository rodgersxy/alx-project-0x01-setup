// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="space-x-4">
            <Link href="/posts" className="hover:text-blue-500">
              Posts
            </Link>
            <Link href="/users" className="hover:text-blue-500">
              Users
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;