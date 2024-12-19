// pages/posts/index.tsx
import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Posts: React.FC = () => {
  const posts = [
    {
      title: 'Sample Post 1',
      description: 'This is a sample post description',
      date: '2024-03-19'
    },
    // Add more sample posts as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Posts;