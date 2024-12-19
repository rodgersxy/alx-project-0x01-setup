// pages/users/index.tsx
import React from 'react';
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid gap-4">
          {/* Add user list content here */}
        </div>
      </main>
    </div>
  );
};

export default Users;